import { useNavigate } from 'react-router-dom';
import './AddCartButton.css';

type AddCartButtonProps = {
  id: string;
  title: string;
  Totalprice: number;
  quantity: number;
  thumbnail: string;
};

function AddCartButton(product: AddCartButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(product);
    navigate('/shopping-cart');
  };
  return (
    <button
      id="add-cart-button"
      className="primary-button"
      onClick={ handleClick }
      type="button"
    >
      Adicionar ao carrinho
    </button>
  );
}

export default AddCartButton;
