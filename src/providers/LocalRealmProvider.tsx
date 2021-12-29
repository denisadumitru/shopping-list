import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Realm from 'realm';
import { ObjectId } from 'bson';

import { schemas } from '@schemas';
import { Text } from '@components';

type RealmSchema = {
  id: string | ObjectId;
};

export type LocalRealmContextType = {
  loading: boolean;
  getRealmObjectById: <T extends RealmSchema>(id: string, collectionName: string) => T | undefined;
  upsertRealmObject: <T extends RealmSchema>(data: T, collectionName: string) => void;
  deleteRealmCollection: (collectionName: string, searchQuery: string, ...arg: any[]) => void;
  getRealmCollection: <T extends RealmSchema>(
    collectionName: string
  ) => { results: T[]; query: Realm.Results<T & Realm.Object> } | undefined;
  removeRealmObject: <T extends RealmSchema>(deletedObject: T, collectionName: string) => void;
};

const LocalRealmContext = React.createContext<LocalRealmContextType | null>(null);

const LocalRealmProvider = ({ children }: { children: React.ReactNode }) => {
  const realmRef = useRef<Realm | null>(null);

  /** Loading state, by default true and is set to false after initializing realm */
  const [loading, setLoading] = useState(true);

  /** Load all the objects from a realm collection. Returns query and the query results as object array  */
  const loadRealmCollection = <T extends RealmSchema>(realm: Realm, collectionName: string) => {
    try {
      const query = realm.objects<T>(collectionName);

      const results: T[] = query.toJSON();

      return { query, results };
    } catch (e) {
      console.error(`Could not load collection ${collectionName}`);
      throw e;
    }
  };

  /** Retrieves a realm collection based on the collection name */
  const getRealmCollection = <T extends RealmSchema>(collectionName: string) => {
    try {
      const realm = realmRef.current;

      if (realm && !realm.isClosed) {
        if (!isMemberOfRealmSchema(realm, collectionName)) {
          console.error(`Collection ${collectionName} not part of local Realm.`);
          return;
        }
        const query = realm.objects<T>(collectionName);

        // Convert Realm.Results<T & Object> into T[]
        // https://github.com/realm/realm-js/issues/2518
        const results: T[] = query.toJSON();

        return { results, query };
      }
    } catch (e) {
      console.error(`Could not load collection ${collectionName}`);
      throw e;
    }
  };

  /** Retrieve a realm object from Realm by ID and collection name */
  const getRealmObjectById = <T extends RealmSchema>(
    id: string | ObjectId,
    collectionName: string
  ): T | undefined => {
    try {
      const realm = realmRef.current;

      if (realm && !realm.isClosed) {
        if (!isMemberOfRealmSchema(realm, collectionName)) {
          console.error(`Collection ${collectionName} not part of local Realm.`);
          return;
        }
        const { results } = loadRealmCollection<T>(realm, collectionName);
        const queriedElement = results.find((element) => String(element.id) === String(id));

        return queriedElement;
      }
    } catch (e) {
      console.error(`Failed to get Realm Object ${id} from collection ${collectionName} - ${e}`);
    }
  };

  /**
   * Update/create a realm object.
   * The data argument is an instantiated Realm object schema.
   * The id is the primary key of the schema.
   * This function checks if there is already a realm object in the collection having id same as the one from data.
   * If it exists, update it. Otherwise, create it.
   */
  const upsertRealmObject = <T extends RealmSchema>(updatedObject: T, collectionName: string) => {
    try {
      const realm = realmRef.current;

      if (realm && !realm.isClosed) {
        if (!isMemberOfRealmSchema(realm, collectionName)) {
          console.error(`Collection ${collectionName} not part of local Realm.`);
          return;
        }

        realm.write(() => {
          realm.create(collectionName, updatedObject, Realm.UpdateMode.Modified);
        });
      }
    } catch (e) {
      console.error(`Failed to write data to local realm in collection ${collectionName} - ${e}`);
    }
  };

  /** Delete all objects of a collection from realm */
  const deleteRealmCollection = (collectionName: string, searchQuery: string, ...arg: any[]) => {
    try {
      const realm = realmRef.current;

      if (realm && !realm.isClosed) {
        if (!isMemberOfRealmSchema(realm, collectionName)) {
          console.error(`Collection ${collectionName} not part of local Realm.`);
          return;
        }
        const { query } = loadRealmCollection(realm, collectionName);

        realm.write(() => {
          if (searchQuery) {
            realm.delete(query.filtered(searchQuery, ...arg));
          } else {
            realm.delete(query);
          }
        });
      }
    } catch (e) {
      console.error(`Failed to delete Realm collection ${collectionName} - ${e}`);
    }
  };

  /**
   * Deletes a realm object.
   * The function checks if there is valid collection and deletes the given object
   */
  const removeRealmObject = <T extends RealmSchema>(deletedObject: T, collectionName: string) => {
    try {
      const realm = realmRef.current;

      if (realm && !realm.isClosed) {
        if (!isMemberOfRealmSchema(realm, collectionName)) {
          console.error(`Collection ${collectionName} not part of local Realm.`);
          return;
        }

        realm.write(() => {
          const collection = realm.objects(collectionName).filtered(`id = $0`, deletedObject?.id);
          realm.delete(collection);
        });
      }
    } catch (e) {
      console.error(
        `Failed to write data for delete in local realm in collection ${collectionName} - ${e}`
      );
    }
  };

  /**
   * Function that initializes Realm.
   * It opens a connection to Realm with the given schemas.
   * The opened Realm connection is stored within the realmRef.
   * We also initialize the realm objects state with initial data that is already stored in database and
   * add a listener that updates the state whenever objects from Realm are changed.
   * TODO: add sync
   */
  const initLocalRealm = useCallback(async (schemasList: Realm.ObjectSchema[]) => {
    let openedRealm: Realm;

    try {
      openedRealm = new Realm({
        schema: schemasList,
        schemaVersion: 1,
        deleteRealmIfMigrationNeeded: true,
      });
    } catch (e: any) {
      console.error('Could not open local Realm.');
      console.error(e);
      setLoading(false);
      return;
    }
    console.info('Initialized local Realm!');
    realmRef.current = openedRealm;
    console.log(openedRealm.path);
  }, []);

  /**
   * Removes realm listeners and closes realm connection.
   * Also resets pucks state.
   */
  const closeRealm = (schemasList: Realm.ObjectSchema[] = []) => {
    try {
      const realm = realmRef.current;
      if (realm !== null) {
        realm.removeAllListeners();
        realm.close();
        realmRef.current = null;

        console.info('Closed local realm');
      }
    } catch (ex) {
      console.info(`Error when closing local Realm! ${ex}`);
    }
  };

  const isMemberOfRealmSchema = (realm: Realm, collectionName: string) => {
    if (realm && realm.schema) {
      const realmSchemaNames = realm.schema.map((schema) => schema.name);

      return realmSchemaNames.includes(collectionName);
    } else return false;
  };

  useEffect(() => {
    initLocalRealm([...schemas]).then(() => {
      setLoading(false);
    });
    console.log('init local realm');
    return () => closeRealm([...schemas]);
  }, [initLocalRealm]);

  return (
    <LocalRealmContext.Provider
      value={{
        loading,
        getRealmObjectById,
        deleteRealmCollection,
        upsertRealmObject,
        getRealmCollection,
        removeRealmObject,
      }}
    >
      {loading ? <Text>'Loading...'</Text> : children}
    </LocalRealmContext.Provider>
  );
};

const useLocalRealm = () => {
  const hook = useContext(LocalRealmContext);
  if (hook === null) {
    throw new Error('useLocalRealm() called outside of a LocalRealmProvider?');
  }
  return hook;
};

export { LocalRealmProvider, useLocalRealm };
