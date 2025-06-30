import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const {user,logout}=useAuth();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-50 shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-900 tracking-wide hover:opacity-80 transition">
       🛒 Inventory System
      </Link>
      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="text-gray-700 font-medium hover:text-indigo-600 transition">Login</Link>
            <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition font-medium">Register</Link>
          </>
        ) : (
          <>
            <span className="text-gray-600 font-medium">Hi, {user}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition font-medium"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
