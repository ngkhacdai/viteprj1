import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statical from "./components/statical/Statical.jsx";
import Category from "./components/category/Category.jsx";
import Product from "./components/product/Product.jsx";
import Store from "./components/store/Store.jsx";
import Customer from "./components/customer/Customer.jsx";
import Discount from "./components/discount/Discount.jsx";
import Order from "./components/order/Order.jsx";
import Login from "./components/login/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Statical />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="/store" element={<Store />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);