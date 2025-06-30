import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import {useLoader} from '../context/LoaderContext'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const{setLoading}= useLoader();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const data = await loginUser({ username, password });
    login({ token: data.token, user: data.username,role:data.role });
    navigate("/");
  } catch (err) {
    setError("Invalid credentials");
    console.error(err);
  }finally{
    setLoading(false);
  }
};

  return (
    <div className="flex-1 flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign in to your account</h2>
         {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">UserName</label>
            <input
              type="text"
              value={username}
              onChange={(e)=>{
                setError(null);
                setUsername(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>{
                setError(null);
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition duration-150"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="/register" className="text-indigo-600 hover:underline ml-1">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
