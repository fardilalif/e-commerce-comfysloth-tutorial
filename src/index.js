import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
