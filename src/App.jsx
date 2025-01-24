import './App.css'

import {Routes, Route } from 'react-router-dom'

import HomePage from "./pages/homepage/HomePage.jsx";
import ProductCatalogPage from "./pages/product-catalog-page/ProductCatalogPage.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import ProductPage from "@/pages/productpage/ProductPage.jsx";
import ShopPage from "@/pages/shoppage/ShopPage.jsx";
import OrderConfirmationPage from "@/pages/order-confirmation-page/OrderConfirmationPage.jsx";
import ProductListingPage from "@/pages/product-listing-page/ProductListingPage.jsx";
import UserRegistrationPage from "@/pages/user-registration-page/UserRegistrationPage.jsx";
import ShopRegistrationPage from "@/pages/shop-registration-page/ShopRegistrationPage.jsx";
import LoginPage from "@/pages/loginpage/LoginPage.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-catalog" element={<ProductCatalogPage />} />
            <Route path="/product/:id/edit" element={<ProductListingPage />}/>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shop/:shopId/new-product" element={<ProductListingPage />} />
            <Route path="/shop/:id" element={<ShopPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/confirmation/order/:id" element={<OrderConfirmationPage />} />
            <Route path="/user/register" element={<UserRegistrationPage />}/>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/shop/register" element={<ShopRegistrationPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
