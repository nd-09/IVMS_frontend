import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const isOutOfStock = product.stockQuantity === 0 ? true : false;
    return (
        <div
            className={`rounded-xl shadow-md p-4 border transition-transform duration-300 hover:scale-[1.02] ${isOutOfStock ? "bg-gray-100 opacity-60 cursor-not-allowed" : "bg-white"
                }`}
        >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
            </h2>
            <p className="text-gray-600 mb-1">💰 Price: ₹{product.price}</p>
            <p className="text-gray-600 mb-3">📦 Stock: {product.stockQuantity}</p>
            {isOutOfStock ? (
                <button
                    className="mt-4 w-full bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                    disabled
                >
                    Out of Stock
                </button>
            ) : (
                <Link to={`/products/${product.id}`}>
                    <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Product
                    </button>
                </Link>
            )}
        </div>
    );
};

export default ProductCard;
