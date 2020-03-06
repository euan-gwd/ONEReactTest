import * as actionTypes from './constants';

const initialState = {
  productsLoading: false,
  productsError: null,
  products: [],
  productsGroup: 0,
  shoppingCart: [],
  shoppingCartTotal: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_BEGIN:
      return {
        ...state,
        productsLoading: true,
        productsError: null
      };
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        productsError: null,
        products: action.payload
      };
    case actionTypes.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        productsLoading: false,
        productsError: action.error
      };
    case actionTypes.SORT_PRODUCTS_TITLE_ASC:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.SORT_PRODUCTS_TITLE_DESC:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.SORT_PRODUCTS_PRICE_ASC:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.SORT_PRODUCTS_PRICE_DESC:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        productVariantModalOpen: false,
        shoppingCart: [...state.shoppingCart, action.payload]
      };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, shoppingCart: state.shoppingCart.filter((item, idx) => item.id !== action.payload.id) };
    default:
      return state;
  }
}
