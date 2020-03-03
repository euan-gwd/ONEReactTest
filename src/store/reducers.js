import produce from 'immer';
import { LOAD_PRODUCTS_BEGIN, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from './actions';

const initialState = {
  productsLoading: false,
  productsError: null,
  products: []
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_BEGIN:
      draft.productsLoading = true;
      draft.productsError = null;
      return;
    case LOAD_PRODUCTS_SUCCESS:
      draft.productsLoading = false;
      draft.productsError = null;
      draft.products = action.payload;
      return;
    case LOAD_PRODUCTS_ERROR:
      draft.productsLoading = false;
      draft.productsError = action.error;
      return;
    default:
      return;
  }
  return state;
}, initialState);
