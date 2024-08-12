import React, { useState } from 'react';

function PhoneInput() {
  const [phone, setPhone] = useState('');

  const formatPhone = (value: string) => {
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Formata o número de telefone com 10 ou 11 dígitos
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
    } else if (value.length <= 11) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(event.target.value);
    setPhone(formattedPhone);
  };

  return (
    <input
      type="tel"
      className="form-control"
      id="input-phone"
      placeholder="Telefone"
      value={ phone }
      onChange={ handleChange }
      maxLength={ 15 }
    />
  );
}

export default PhoneInput;
