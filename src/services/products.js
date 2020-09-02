import api from './api';

const ProductsServices = {
  index: () => api.get(`products/1`),
};

export default ProductsServices;
