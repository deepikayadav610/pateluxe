import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="notfound-wrapper mt-5">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="notfound-actions">
        <Link to="/" className="notfound-btn primary">
          Back to Home
        </Link>
        <Link to="/products" className="notfound-btn secondary">
          Explore Products
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
