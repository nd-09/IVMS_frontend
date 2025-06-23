import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-50 shadow-md">
      <Link to="/" className="text-xl font-bold text-gray-900">
       🛒 Inventory System
      </Link>
      <div>
        {isLoginPage && (
          <Link to="/register">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Register
            </button>
          </Link>
        )}
        {isRegisterPage && (
          <Link to="/login">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
