import { api } from '@services';

export default {
  getAllProducts: () => api.get('fruit/all').then((response) => response.data),
};
