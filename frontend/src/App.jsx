import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
       <Navbar />

       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
       </Routes>
    </div>
  )
}

export default App;