import './App.css'

import {Routes, Route } from 'react-router-dom'

import Home from "./pages/home/Home.jsx";
import ProductCatalog from "./pages/productcatalog/ProductCatalog.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productcatalog" element={<ProductCatalog />} />
            <Route path="/product" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
