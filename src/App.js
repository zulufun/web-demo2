import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/categories/Categories";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
