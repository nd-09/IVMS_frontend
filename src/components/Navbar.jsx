export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <a href="/dashboard" className="mr-4">Dashboard</a>
        <a href="/products" className="mr-4">Products</a>
        <a href="/users">Users</a>
      </div>
      <button className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </nav>
  );
}