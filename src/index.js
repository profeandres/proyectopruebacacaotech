import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// estilos CSS de cada componente
import "./Estilos/index.css";
import "./Estilos/Navbar.css";
import "./Estilos/Home.css";
import "./Estilos/Products.css";

// Componente raiz: App
import App from "./App";



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
