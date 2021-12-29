import React from 'react';

import { ProductCategoriesProvider } from '@providers';
import { useLocalRealm } from '@providers/LocalRealmProvider';
import { ProductCategorySchema } from '@schemas/Product';
import { ProductCategoryType } from '@types';

export default function useProductCategories() {
  const { setCategories, categories } = ProductCategoriesProvider.useState();
  const localRealm = useLocalRealm();

  const getCategories = () => {
    if (localRealm) {
      const localCategories = localRealm.getRealmCollection(
        ProductCategorySchema.schema.name
      )?.results;
      setCategories(localCategories);
    }
  };

  const addCategory = (category: ProductCategoryType) => {
    localRealm.upsertRealmObject(category, ProductCategorySchema.schema.name);
    getCategories();
    // setCategories([...categories, category]);
  };

  return {
    getCategories,
    addCategory,
  };
}
