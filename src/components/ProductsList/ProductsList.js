import React from 'react';
import { connect } from 'react-redux';
import './product-list-styles.css';

class ProductsList extends React.Component {
  render() {
    const { products, productsLoading, productsError } = this.props;

    if (productsLoading) {
      return <div>Loading...</div>;
    }

    if (productsError) {
      return <div>{error.message}</div>;
    }

    return (
      <div className="products-listing">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.images[0].src} alt="product Image" className="product-image" />
            </div>
            <div className="card-content">
              <p className="title">{product.title}</p>
              <p>{`£ 0`}</p>
            </div>
            <div className="button-group">
              <button className="primary-button">Add to Cart</button>
              <button className="secondary-button">Quick View</button>
            </div>
          </div>
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
