import { ActionTypes } from './types';
import produce from 'immer';

const INITIAL_STATE = {
  items: [],
};

function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex((item) => {
          return item.product.id === product.id;
        });

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      default:
        return draft;
    }
  });
}

export default cart;
