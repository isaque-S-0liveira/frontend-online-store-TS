import './Loading.css';

function Loading() {
  return (
    <div
      className="loading-container primary-bg-color"
    >
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
