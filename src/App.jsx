import './App.css'

import {Routes, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/HomePage.jsx";
import ProductCatalogPage from "./pages/product-catalog-page/ProductCatalogPage.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import ProductPage from "@/pages/productpage/ProductPage.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-catalog" element={<ProductCatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
