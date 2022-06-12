export default function Header(props) {
  const { page, setPage } = props;
  const active = "nav-link active";
  const inactive = "nav-link";

  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button className={page === 1 ? active : inactive} onClick={() => setPage(1)}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className={page === 0 ? active : inactive} onClick={() => setPage(0)}>
            Add Item
          </button>
        </li>
        <li className="nav-item">
          <button className={page === 2 ? active : inactive} onClick={() => setPage(2)}>
            Register
          </button>
        </li>
        <li className="nav-item">
          <button className={page === 9 ? active : inactive} onClick={() => setPage(9)}>
            About
          </button>
        </li>
      </ul>
      <div className="col-md-2 text-end">
        <button
          type="button"
          className={page === 3 ? "btn btn-primary me-2" : "btn btn-outline-primary me-2"}
          onClick={() => setPage(3)}
        >
          Login
        </button>
      </div>
    </header>
  );
}
