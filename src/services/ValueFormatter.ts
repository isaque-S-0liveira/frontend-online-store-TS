export default function ValueFormatter({ valor }: { valor: number }): string {
  if (typeof valor !== 'number' || Number.isNaN(valor)) {
    return '0,00';
  }
  let valorFormatado = valor.toFixed(2);
  valorFormatado = valorFormatado.replace('.', ',');
  valorFormatado = parseFloat(valorFormatado.replace(',', '.')).toLocaleString('pt-BR');
  return valorFormatado;
}
