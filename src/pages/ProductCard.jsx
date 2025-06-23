// components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700">Price: ₹{product.price}</p>
      <p className="text-gray-600">In stock: {product.quantity}</p>
    </div>
  );
};

export default ProductCard;
