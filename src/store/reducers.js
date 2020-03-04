import produce from 'immer';
import * as actionTypes from './constants';

const initialState = {
  productsLoading: false,
  productsError: null,
  products: [],
  shoppingCart: []
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_BEGIN:
      draft.productsLoading = true;
      draft.productsError = null;
      return;
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      draft.productsLoading = false;
      draft.productsError = null;
      draft.products = action.payload;
      return;
    case actionTypes.LOAD_PRODUCTS_ERROR:
      draft.productsLoading = false;
      draft.productsError = action.error;
      return;
    case actionTypes.SORT_PRODUCTS_TITLE_ASC:
      draft.products = action.payload;
      return;
    case actionTypes.SORT_PRODUCTS_TITLE_DESC:
      draft.products = action.payload;
      return;
    case actionTypes.SORT_PRODUCTS_PRICE_ASC:
      draft.products = action.payload;
      return;
    case actionTypes.SORT_PRODUCTS_PRICE_DESC:
      draft.products = action.payload;
      return;
    case actionTypes.ADD_TO_CART:
      draft.shoppingCart.push(action.payload);
      return;
    default:
      return;
  }
  return state;
}, initialState);
