import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import './product-list-styles.css';

class ProductsList extends React.Component {
  render() {
    const { products, productsLoading, productsError } = this.props;

    if (productsLoading) {
      return <div>Loading...</div>;
    }

    if (productsError) {
      return <div>{`Oops something went wrong...`}</div>;
    }

    return (
      <div className="products-listing">
        {products.map((product, idx) => (
          <ProductItem key={product.id} idx={idx} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productsLoading: state.productsLoading,
  productsError: state.productsError,
  products: state.products
});

export default connect(mapStateToProps)(ProductsList);
