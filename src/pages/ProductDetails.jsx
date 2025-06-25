import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../api/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-4 flex items-center justify-center" id={product.id}>
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/300x300.png?text=No+Image'}
          alt={product.name}
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Price:</span> ₹{product.price}</p>
            <p><span className="font-medium">In Stock:</span> {product.stockQuantity}</p>
            <p><span className="font-medium">Category:</span> {product.category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
