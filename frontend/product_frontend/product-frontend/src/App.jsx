import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct"
import CategoryList from "./components/CategoryList"
import AddCategory from "./components/AddCategory";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Router>
      <div className="container mt-3">
        <h2>Product App</h2>
        <nav>
          <Link to="/products">Products</Link> |{" "}
          <Link to="/add-product">Add Product</Link> |{" "}
          <Link to="/categories">Categories</Link> |{" "}
          <Link to="/add-category">Add Category</Link>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/add-category" element={<AddCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
