import * as actionTypes from './constants';
import _orderBy from 'lodash/orderBy';

const getProducts = () => {
  return fetch('https://j-parre.myshopify.com/products.json').then((res) => res.json());
};

export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOAD_PRODUCTS_BEGIN });
    getProducts()
      .then((res) => {
        dispatch({ type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: res.products });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.LOAD_PRODUCTS_ERROR, error });
      });
  };
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };
};

export const removeFromCart = (product) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product });
  };
};

export const sortProductsByTitleAscending = () => {
  return (dispatch, getState) => {
    const products = getState().products;
    const sortedProducts = _orderBy(products, ['title'], ['asc']);
    dispatch({ type: actionTypes.SORT_PRODUCTS_TITLE_ASC, payload: sortedProducts });
  };
};

export const sortProductsByTitleDecending = () => {
  return (dispatch, getState) => {
    const products = getState().products;
    const sortedProducts = _orderBy(products, ['title'], ['desc']);
    dispatch({ type: actionTypes.SORT_PRODUCTS_TITLE_DESC, payload: sortedProducts });
  };
};

export const sortProductsByPriceAscending = () => {
  return (dispatch, getState) => {
    const products = getState().products;
    const sortedProducts = _orderBy(products, ['price'], ['asc']);
    dispatch({ type: actionTypes.SORT_PRODUCTS_PRICE_ASC, payload: sortedProducts });
  };
};

export const sortProductsByPriceDecending = () => {
  return (dispatch, getState) => {
    const products = getState().products;
    const sortedProducts = _orderBy(products, ['price'], ['desc']);
    dispatch({ type: actionTypes.SORT_PRODUCTS_PRICE_DESC, payload: sortedProducts });
  };
};

export const openProductVariantModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.OPEN_SELECT_PRODUCT_VARIANT_MODAL });
  };
};
export const closeProductVariantModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CLOSE_SELECT_PRODUCT_VARIANT_MODAL });
  };
};
