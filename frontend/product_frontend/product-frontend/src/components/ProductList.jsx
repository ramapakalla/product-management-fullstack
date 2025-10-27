import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`http://localhost:8085/api/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📦 Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3 font-medium text-gray-700">{p.name}</td>
                  <td className="p-3 text-gray-600">₹{p.price.toFixed(2)}</td>
                  <td className="p-3">{p.quantity}</td>
                  <td className="p-3">{p.category ? p.category.name : "—"}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-500 hover:text-red-700 font-semibold transition"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductList;
