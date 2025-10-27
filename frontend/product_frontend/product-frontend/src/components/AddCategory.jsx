import React, { useState } from "react";
import axios from "axios";

function AddCategory() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8085/api/categories", { name });
    alert("✅ Category added successfully!");
    setName("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">➕ Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
