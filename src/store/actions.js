import { getProducts } from './api';
export const LOAD_PRODUCTS_BEGIN = 'LOAD_PRODUCTS_BEGIN';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS_ERROR';

export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS_BEGIN });
    getProducts()
      .then((res) => {
        dispatch({ type: LOAD_PRODUCTS_SUCCESS, payload: res.products });
      })
      .catch((error) => {
        dispatch({ type: LOAD_PRODUCTS_ERROR, error });
      });
  };
};
