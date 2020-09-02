import { ActionTypes } from './types';

export function addProductToCart(product) {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      product,
    },
  };
}
