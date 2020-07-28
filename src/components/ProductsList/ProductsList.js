import React from 'react';
import {useSelector} from 'react-redux'
import ProductItem from './ProductItem';
import './product-list-styles.css';

const ProductsList = () => {
  const productsLoading = useSelector(state => state.productsLoading)
  const productsError = useSelector(state => state.productsError)
  const products = useSelector(state => state.products)

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



export default ProductsList;
