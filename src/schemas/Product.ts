import { ProductCategoryType, ProductType } from '@types';

export class ProductCategorySchema {
  // id: ProductCategoryType['id'];
  // name: ProductCategoryType['name'];
  // items: ProductCategoryType['items'];

  constructor(data: ProductCategoryType) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
    // this.id = data.id;
    // this.name = data.name;
    // this.items = data.items;
  }

  static schema: Realm.ObjectSchema = {
    name: 'ProductCategory',
    properties: {
      id: 'objectId',
      name: 'string',
      items: 'Product[]',
    },
    primaryKey: 'id',
  };
}

export class ProductSchema {
  id: ProductType['id'];
  name: ProductType['name'];

  constructor(data: ProductType) {
    this.id = data.id;
    this.name = data.name;
  }

  static schema: Realm.ObjectSchema = {
    name: 'Product',
    properties: {
      id: 'string',
      name: 'string',
    },
    primaryKey: 'id',
  };
}
