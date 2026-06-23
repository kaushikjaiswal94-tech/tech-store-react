import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>
        <Link to="/" className="logo-link">
          TechStore
        </Link>
      </h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Products</li>
        <li>Categories</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>

      <div className="auth-buttons">
        {user ? (
          <>
            <span className="user-greeting">Welcome, {user.name}!</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-btn login-btn">
              Login
            </Link>
            <Link to="/signup" className="auth-btn signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;