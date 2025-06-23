export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold underline text-blue-500">Welcome to Inventory Management System</h1>
      <p className="mt-4">Please <a href="/login" className="text-blue-500 underline">Login</a> or <a href="/register" className="text-blue-500 underline">Register</a> to continue.</p>
    </div>
  );
}