import RenderCategories from '../RenderCategories/RenderCategories';
import './LGCategories.css';

function LGCategories() {
  return (
    <div id="categories-main-LG" className="d-none d-lg-block">
      <div id="categories-title">
        <h3>Categorias</h3>
      </div>
      <div id="categories-body">
        <RenderCategories />
      </div>
    </div>
  );
}

export default LGCategories;
