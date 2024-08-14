import React from 'react';
import './SelectOrderProducts.css';

type SelectOrderProductsProps = {
  setorderProducts: React.Dispatch<React.SetStateAction<string>>;
};

function SelectOrderProducts({ setorderProducts }: SelectOrderProductsProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setorderProducts(event.target.value);
  };
  return (
    <div id="select-order-products-container">
      <select className="form-select" onChange={ handleChange }>
        <option value="select">Ordenar por preço</option>
        <option value="Menor">Menor preço</option>
        <option value="Maior">Maior preço</option>
      </select>
    </div>
  );
}

export default SelectOrderProducts;
