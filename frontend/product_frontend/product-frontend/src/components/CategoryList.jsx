import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      await axios.delete(`http://localhost:8085/api/categories/${id}`);
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📂 Category List</h2>
      {categories.length === 0 ? (
        <p className="text-center text-gray-500">No categories available.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{cat.id}</td>
                <td className="p-3 font-medium text-gray-700">{cat.name}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="text-red-500 hover:text-red-700 font-semibold transition"
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CategoryList;
