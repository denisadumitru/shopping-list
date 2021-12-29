import { ObjectId } from 'bson';

export type ProductCategoryType = {
  id: string | ObjectId;
  name: string;
  items: Array<any>;
};

export type ProductType = {
  id: string | ObjectId;
  name: string;
};
