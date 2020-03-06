import * as actionTypes from './constants';
import _orderBy from 'lodash/orderBy';

const getProducts = () => {
  return fetch('https://j-parre.myshopify.com/products.json')
    .then((res) => res.json())
    .then((data) => {
      const result = data.products;
      const products = flattenedProducts(result);
      return products;
    });
};

const flattenedProducts = (products) => {
  const newProducts = products.map((product) => {
    let newProductsArr = [];
    for (const item of product.variants) {
      newProductsArr.push({ ...item, price: Number(item.price), ...product, id: item.id });
    }
    return newProductsArr;
  });
  return newProducts.flat();
};

export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOAD_PRODUCTS_BEGIN });
    getProducts()
      .then((products) => {
        dispatch({ type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: products });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.LOAD_PRODUCTS_ERROR, error });
      });
  };
};

export const addToCart = (product) => {
  return (dispatch) => {
    const timestamp = Date.now();
    const productWithUID = { ...product, id: `${product.id} + ${timestamp}` };
    dispatch({ type: actionTypes.ADD_TO_CART, payload: productWithUID });
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
