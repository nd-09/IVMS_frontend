import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("USER_INVENTORY");
  const [username,setUsername]= useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]= useState("");
  const [confirmPassword,setConfirmPassword]= useState("");
  const[error,setError]=useState("");
 const {login}= useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
        setError("Password and Confirm password does not match!");
        return;
      }
    try {
      const response = await registerUser({username,email, password, role});
      if(response){
      login({ token: response.token, user: response.username,role:response.role });
      navigate("/");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Something went wrong. Try again!");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
          {error && (
          <div className="text-red-500 text-sm text-center font-medium">
            {error}
          </div>
        )}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            maxLength={25}
            onChange={(e)=>{
              setError(null);
              setUsername(e.target.value);
            }}
            placeholder="Username"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
           <input
            type="email"
            value={email}
            maxLength={30}
            onChange={(e)=>{
              setError(null);
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e)=>{
              setError(null);
              setPassword(e.target.value)
            }}
            placeholder="Password"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e)=>{
              setError(null);
              setConfirmPassword(e.target.value)
            }}
            placeholder="Confirm Password"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="USER_INVENTORY">User</option>
              <option value="ADMIN_INVENTORY">Admin</option>
            </select>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition duration-150"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
