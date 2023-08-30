import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import App from "./App"
import Products from "./Products/Products";
import HomePage from "./HomePage/HomePage";

import CardPage from "./Products/CardPage";
import Banner from "./HomePage/Banner";
import Browse from "./HomePage/Browse";

import CreateAccount from "./Accounts/CreateAccount";
import Account from "./Accounts/Account";
import Nav from "./HomePage/Nav";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>
  },
  {
    
    path: "/products",
    element: <Products/>
  },

  {
    
    path: "/card",
    element: <CardPage/>
  },
  {
    
    path: "/CreateAccount",
    element: <CreateAccount/>
  },
  {
    
    path: "/Account",
    element: <Account/>
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
    

);