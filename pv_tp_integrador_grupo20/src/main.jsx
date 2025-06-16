import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/navbar.css";
import "./styles/loading.css";
import "./styles/error.css";
import "./index.css";

// ** LA IMPORTACIÓN CRÍTICA QUE CARGA TODOS LOS ESTILOS **
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
