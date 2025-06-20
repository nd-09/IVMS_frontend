export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <select className="border p-2 rounded">
          <option value="ADMIN_INVENTORY">Admin</option>
          <option value="STAFF">Staff</option>
        </select>
        <button className="bg-green-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}