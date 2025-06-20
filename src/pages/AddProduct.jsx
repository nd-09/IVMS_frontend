export default function AddProduct() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-2 rounded" />
        <input type="number" placeholder="Price" className="border p-2 rounded" />
        <input type="number" placeholder="Quantity" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white py-2 rounded">Add</button>
      </form>
    </div>
  );
}