import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//toasts add krne ke liye toast container add krenge
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    
    <ToastContainer/>
  </div>


);
