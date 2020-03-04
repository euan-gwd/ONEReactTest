import * as actionTypes from './constants';

const getProducts = () => {
  return fetch('https://j-parre.myshopify.com/products.json').then((res) => res.json());
};

const compareValues = (key, order = 'asc') => {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    // const itemA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    // const itemB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    // const itemA = a[key];
    // const itemB = b[key];

    // let comparison = 0;
    // if (itemA > itemB) {
    //   comparison = 1;
    // } else if (itemA < itemB) {
    //   comparison = -1;
    // }

    let comparison = 0;
    a[key] > b[key] ? (comparison = 1) : (comparison = -1);

    return order === 'desc' ? comparison * -1 : comparison;
  };
};

const sortProductsByTitleAscending = () => {
  return (dispatch, getState) => {
    const productsClone = [...getState().products];
    const sortedProducts = productsClone.sort(compareValues(title, 'asc'));
    dispatch({ type: actionTypes.SORT_PRODUCTS_TITLE_ASC, payload: sortedProducts });
  };
};

const sortProductsByTitleDecending = () => {
  return (dispatch, getState) => {
    const productsClone = [...getState().products];
    const sortedProducts = productsClone.sort(compareValues(title, 'desc'));
    dispatch({ type: actionTypes.SORT_PRODUCTS_TITLE_DESC, payload: sortedProducts });
  };
};

const sortProductsByPriceAscending = () => {
  return (dispatch, getState) => {
    const productsClone = [...getState().products];
    const sortedProducts = productsClone.sort(compareValues(price, 'asc'));
    dispatch({ type: actionTypes.SORT_PRODUCTS_PRICE_ASC, payload: sortedProducts });
  };
};

const sortProductsByPriceDecending = () => {
  return (dispatch, getState) => {
    const productsClone = [...getState().products];
    const sortedProducts = productsClone.sort(compareValues(price, 'desc'));
    dispatch({ type: actionTypes.SORT_PRODUCTS_PRICE_DESC, payload: sortedProducts });
  };
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
