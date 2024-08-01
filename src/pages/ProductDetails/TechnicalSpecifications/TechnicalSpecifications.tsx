/* eslint-disable max-len */
import { useState } from 'react';
import AddCartButton from '../../../components/AddCartButton/AddCartButton';
import AddRemoveProducts from '../../../components/AddRemoveTotalProducts/AddRemoveTotalProducts';
import { Product } from '../../../types/ProductTypes';
import './TechnicalSpecifications.css';

function TechnicalSpecifications({ productDetail }: { productDetail: Product }) {
  const [quantityAndValue, setQuantityAndValue] = useState({ quantity: 1, value: productDetail.price });

  if (!productDetail || !productDetail.pictures) {
    return null;
  }

  return (
    <div id="product-technical-specifications-main">
      <div id="product-technical-specifications-header">
        <h2>Especificações Técnicas</h2>
      </div>
      <div id="product-technical-specifications-body">
        <ul>
          <p>
            -
            {' '}
            <strong>Garantia:</strong>
            {' '}
            {productDetail.warranty}
          </p>
          {productDetail.attributes.map((attribute) => (
            <p key={ attribute.id }>
              <strong>
                -
                {' '}
                {attribute.name}
                :

                {' '}
                {' '}
              </strong>
              {attribute.values.map((value) => (
                <span key={ value.name }>{value.name}</span>
              ))}

            </p>
          ))}
        </ul>
      </div>
      <div id="product-technical-specifications-footer" className="row p-0 m-0">
        <div
          className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 "
        >
          <AddRemoveProducts price={ productDetail.price } setQuantityAndValue={ setQuantityAndValue } />
        </div>
        <div
          id="add-cart-button-container"
          className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6"
        >
          <AddCartButton
            id={ productDetail.id }
            title={ productDetail.title }
            thumbnail={ productDetail.thumbnail }
            Totalprice={ quantityAndValue.value }
            quantity={ quantityAndValue.quantity }
          />
        </div>
      </div>

    </div>
  );
}

export default TechnicalSpecifications;
