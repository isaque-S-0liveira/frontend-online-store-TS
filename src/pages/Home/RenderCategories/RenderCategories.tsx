import { useEffect, useState } from 'react';
import { Category } from '../../../types/ProductTypes';
import { getCategories } from '../../../services/api';
import './RenderCategories.css';

function RenderCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [stateCategoryId, setStateCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const responseCategories = await getCategories();
      setCategories(responseCategories);
    };
    fetchCategories();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const categoryId = event.currentTarget.value;
    setStateCategoryId(categoryId);
  };

  return (
    <div id="categories-main">
      {categories.map(({ id, name }) => (
        <button
          onClick={ handleClick }
          key={ id }
          className={ `category-button 
            ${stateCategoryId === id && 'category-selected'}` }
          value={ id }
        >
          {name}
        </button>
      ))}
    </div>

  );
}

export default RenderCategories;
