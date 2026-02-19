import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";

import { Toaster } from "react-hot-toast";

export default function App() {
  const {theme} = useThemeStore();
  console.log(theme)

  return (
    <div className="bg-base-200 text-base-content min-h-screen transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}
