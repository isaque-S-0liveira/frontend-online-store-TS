import RenderCategories from '../RenderCategories/RenderCategories';
import './SMCategories.css';

function SMCategories() {
  return (
    <div id="offcanvas-bar">
      <h4>Produtos por categoria</h4>
      <button
        id="offcanvas-open-button"
        className="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasCategories"
        aria-controls="offcanvasCategories"
        aria-label="Toggle offcanvas"
      >
        <i className="bi bi-list" />
      </button>

      <div
        className="offcanvas-lg offcanvas-start text-bg-dark"
        tabIndex={ -1 }
        id="offcanvasCategories"
        aria-labelledby="offcanvasCategoriesLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5
            className="offcanvas-title"
            id="offcanvasCategoriesLabel"
          >
            Categorias
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasCategories"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <RenderCategories />
        </div>
      </div>
    </div>
  );
}

export default SMCategories;
