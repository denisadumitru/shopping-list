import { RouteNames } from '@navigation';
import { ProductCategoryType } from '@types';

export type ProductsStackParams = {
  [RouteNames.AddEditCategory]: {
    params: { category: ProductCategoryType };
  };
  [RouteNames.Category]: {
    params: { category: ProductCategoryType };
  };
};
