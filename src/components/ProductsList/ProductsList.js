import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from '../Buttons/Button';
import ProductItem from './ProductItem';
import './product-list-styles.css';

const ProductsList = ({ products, productsLoading, productsError }) => {
  if (productsLoading) {
    return <div className="centered-alerts">{`Loading...`}</div>;
  }

  if (productsError) {
    return <div className="centered-alerts">{`Oops something went wrong...`}</div>;
  }

  return (
    <div className="products-listing">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsLoading: state.productsLoading,
  productsError: state.productsError,
  products: state.products
});

export default connect(mapStateToProps)(ProductsList);
