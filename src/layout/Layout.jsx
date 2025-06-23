import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location=useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className={ isAuthPage?"flex-1 flex items-center justify-center px-4":"min-h-screen bg-gray-50"}>{children}</main>
    </div>
  );
}
