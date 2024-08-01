export default function ValueFormatter({ valor }: { valor: number }): string {
  let valorFormatado = valor.toFixed(2);
  valorFormatado = valorFormatado.replace('.', ',');
  valorFormatado = parseFloat(valorFormatado.replace(',', '.')).toLocaleString('pt-BR');
  return valorFormatado;
}
