import { ProductCategorySchema, ProductSchema } from './Product';

const schemaClasses = [ProductCategorySchema, ProductSchema];

const schemas: Realm.ObjectSchema[] = schemaClasses.map((schemaClass) => schemaClass.schema);

export { schemas };
