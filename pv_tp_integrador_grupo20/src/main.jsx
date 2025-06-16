import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import "./styles/navbar.css";
import "./styles/loading.css";
import "./styles/error.css";
import "./styles/toast.css";
import "./styles/product-card.css";
import "./styles/transitions.css";
import "./styles/buttons.css";
import "./index.css";

// ** LA IMPORTACIÓN CRÍTICA QUE CARGA TODOS LOS ESTILOS **
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
