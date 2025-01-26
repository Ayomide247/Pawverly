import { useState } from "react";
import { Navbar } from "./components/index";
import MainPage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/fragments/CartContext";
import Payment from "./pages/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" font-rubik">
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/productPage" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Router>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
