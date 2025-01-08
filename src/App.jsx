import './App.css'

import {Routes, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/HomePage.jsx";
import ProductCatalog from "./pages/productcatalog/ProductCatalog.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/product" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
