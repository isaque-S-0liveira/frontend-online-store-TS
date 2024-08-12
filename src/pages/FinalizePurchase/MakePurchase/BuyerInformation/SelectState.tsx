/* eslint-disable max-len */
import { useEffect, useState } from 'react';

type State = {
  id: number;
  sigla: string;
  nome: string;
};

function SelectState() {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json() as State[];

        const sortedStates = data.sort((a, b) => a.nome.localeCompare(b.nome));
        setStates(sortedStates);
      } catch (error) {
        console.error('Erro ao buscar os estados:', error);
      }
    };

    fetchStates();
  }, []);

  return (
    <select className="form-select" aria-label="Estado" id="input-state">
      <option selected disabled>Estado</option>
      {states.map((state) => (
        <option key={ state.id } value={ state.sigla }>
          {state.nome}
          {' '}
          (
          {state.sigla}
          )
        </option>
      ))}
    </select>
  );
}

export default SelectState;
