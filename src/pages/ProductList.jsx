import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, name: "Milk", price: 40, quantity: 100 },
    { id: 2, name: "Cheese", price: 200, quantity: 50 },
    { id: 3, name: "Butter", price: 150, quantity: 20 },
    // later this will be fetched from backend
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
