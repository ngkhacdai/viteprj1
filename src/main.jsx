import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statical from "./components/statical/Statical.jsx";
import Category from "./components/category/Category.jsx";
import Product from "./components/product/Product.jsx";
import Store from "./components/store/Store.jsx";
// import Customer from "./components/customer/Customer.jsx";
import Discount from "./components/discount/Discount.jsx";
// import Order from "./components/order/Order.jsx";
import Login from "./components/login/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./components/product/ProductDetail.jsx";
import StoreDetail from "./components/store/StoreDetail.jsx";
// import CustomerDetail from "./components/customer/CustomerDetail.jsx";
import OrderDetail from "./components/order/OrderDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Statical />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/store" element={<Store />} />
            <Route path="/storedetail" element={<StoreDetail />} />
            {/* <Route path="/customer" element={<Customer />} /> */}
            {/* <Route path="/customerdetail" element={<CustomerDetail />} /> */}
            <Route path="/discount" element={<Discount />} />
            {/* <Route path="/order" element={<Order />} /> */}
            <Route path="/orderdetail" element={<OrderDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
