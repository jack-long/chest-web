export default function Header(props) {
  const { page, setPage } = props;

  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button className="nav-link active" onClick={() => setPage(1)}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setPage(0)}>
            Add Item
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">About</button>
        </li>
      </ul>
      <div className="col-md-2 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
      </div>
    </header>
  );
}
