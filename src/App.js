//IMPORTACIONES GENERALES
import React from "react";

//IMPORTACIÓN DEL ROUTER (NO TOCAR A MENOS QUE SEA NECESARIO)
//PONER AQUÍ LOS COMPONENTES JUNTO CON SU CONFIGURACIÓN ROUTER.
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Products from "./componentes/Products";
//PLANTILLA APP CON TODOS LOS CODIGOS DE LA PÁGINA HTML/CSS/BOOTSTRAP

function App() {
  //Dynamic Values:


  //los dynamic values se llaman en el template como: { dynamicValue } 
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home></Home>
        <Products/>

      </div>
    </div>
    );
}
export default App;