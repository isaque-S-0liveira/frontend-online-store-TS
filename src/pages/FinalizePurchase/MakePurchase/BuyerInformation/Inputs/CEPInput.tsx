import React, { useState } from 'react';

function CEPInput() {
  const [cep, setCep] = useState('');

  const formatCEP = (value: string) => {
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Adiciona a formatação ao CEP
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCEP = formatCEP(event.target.value);
    setCep(formattedCEP);
  };

  return (
    <input
      type="text"
      className="form-control"
      id="input-cep"
      placeholder="CEP"
      value={ cep }
      onChange={ handleChange }
      maxLength={ 9 }
    />
  );
}

export default CEPInput;
