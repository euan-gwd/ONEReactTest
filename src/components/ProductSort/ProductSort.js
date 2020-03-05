import React from 'react';
import { connect } from 'react-redux';
import { FaSortAlphaDown, FaSortAlphaUp, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import {
  sortProductsByTitleAscending,
  sortProductsByTitleDecending,
  sortProductsByPriceAscending,
  sortProductsByPriceDecending
} from '../../store/actions';
import './product-sort-styles.css';

const ProductSort = ({
  sortProductsByTitleAscending,
  sortProductsByTitleDecending,
  sortProductsByPriceAscending,
  sortProductsByPriceDecending
}) => (
  <div className="product-sort">
    <div className="button-group">
      <button className="primary-button" onClick={() => sortProductsByPriceDecending()}>
        <FaSortAmountDown /> Price
      </button>
      <button className="primary-button" onClick={() => sortProductsByPriceAscending()}>
        <FaSortAmountUp /> Price
      </button>
      <button className="primary-button" onClick={() => sortProductsByTitleAscending()}>
        <FaSortAlphaDown /> Title
      </button>
      <button className="primary-button" onClick={() => sortProductsByTitleDecending()}>
        <FaSortAlphaUp /> Title
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    sortProductsByTitleAscending: () => dispatch(sortProductsByTitleAscending()),
    sortProductsByTitleDecending: () => dispatch(sortProductsByTitleDecending()),
    sortProductsByPriceAscending: () => dispatch(sortProductsByPriceAscending()),
    sortProductsByPriceDecending: () => dispatch(sortProductsByPriceDecending())
  };
};

export default connect(null, mapDispatchToProps)(ProductSort);
