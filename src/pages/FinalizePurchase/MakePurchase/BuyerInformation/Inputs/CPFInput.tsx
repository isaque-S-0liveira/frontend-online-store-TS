import React, { useState } from 'react';

function CPFInput() {
  const [cpf, setCpf] = useState('');

  const formatCPF = (value: string) => {
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Adiciona a formatação ao CPF
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    return value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(event.target.value);
    setCpf(formattedCPF);
  };

  return (
    <input
      type="text"
      className="form-control"
      id="CPF"
      placeholder="CPF"
      value={ cpf }
      onChange={ handleChange }
      maxLength={ 14 }
    />
  );
}

export default CPFInput;
