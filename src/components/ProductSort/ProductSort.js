import React from 'react';
import {useDispatch} from 'react-redux'
import { FaSortAlphaDown, FaSortAlphaUp, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import {
  sortProductsByTitleAscending,
  sortProductsByTitleDecending,
  sortProductsByPriceAscending,
  sortProductsByPriceDecending
} from '../../store/actions';
import './product-sort-styles.css';

const ProductSort = (

) => {
  const dispatch = useDispatch()
  return(
  <div className="product-sort">
    <div className="button-group">
      <button className="primary-button" onClick={() => dispatch(sortProductsByPriceDecending())}>
        <FaSortAmountDown /> Price
      </button>
      <button className="primary-button" onClick={() => dispatch(sortProductsByPriceAscending())}>
        <FaSortAmountUp /> Price
      </button>
      <button className="primary-button" onClick={() => dispatch(sortProductsByTitleAscending())}>
        <FaSortAlphaDown /> Title
      </button>
      <button className="primary-button" onClick={() => dispatch(sortProductsByTitleDecending())}>
        <FaSortAlphaUp /> Title
      </button>
    </div>
  </div>
)};



export default ProductSort;
