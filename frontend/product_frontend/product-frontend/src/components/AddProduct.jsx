import React, { useEffect, useState } from "react";
import axios from "axios";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    categoryId: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8085/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: product.name,
      price: parseFloat(product.price),
      quantity: parseInt(product.quantity),
      category: { id: parseInt(product.categoryId) },
    };
    await axios.post("http://localhost:8085/api/products", payload);
    alert("✅ Product added successfully!");
    setProduct({ name: "", price: "", quantity: "", categoryId: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">➕ Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
