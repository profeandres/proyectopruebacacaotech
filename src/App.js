//IMPORTACIONES GENERALES
import React from "react";
import { useState } from 'react';

//IMPORTACIÓN DEL ROUTER (NO TOCAR A MENOS QUE SEA NECESARIO)
//PONER AQUÍ LOS COMPONENTES JUNTO CON SU CONFIGURACIÓN ROUTER.
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Products from "./componentes/Products";
//PLANTILLA APP CON TODOS LOS CODIGOS DE LA PÁGINA HTML/CSS/BOOTSTRAP

function App() {
  //Dynamic Values:
  const [products, setProducts] = useState([
    {id: 1, name:'Urea', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/StQT50t/bulto-urea.jpg'},
    {id: 2, name:'Dap', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/2qHzzZp/cajon-fermentador.jpg'},
    {id: 3, name:'KCl', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/d63pGfk/kcl.jpg'},
    {id: 4, name:'Nitafos', presentacion: 'Bulto 50kg',Tipo: 'Organico', urlImg: 'https://i.ibb.co/QDhcMN6/nitrafos.jpg'},
  ])

  const productsv= [
    {id: 1, name:'Urea', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/StQT50t/bulto-urea.jpg'},
    {id: 2, name:'Dap', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/2qHzzZp/cajon-fermentador.jpg'},
    {id: 3, name:'KCl', presentacion: 'Bulto 50kg',Tipo: 'Quimico', urlImg: 'https://i.ibb.co/d63pGfk/kcl.jpg'},
    {id: 4, name:'Nitafos', presentacion: 'Bulto 50kg',Tipo: 'Organico', urlImg: 'https://i.ibb.co/QDhcMN6/nitrafos.jpg'},
    {id: 5, name:'Fosforita', presentacion: 'Bulto 50kg',Tipo: 'Organico', urlImg: 'https://i.ibb.co/Rp8F3y5/fosforita.jpg'},
    {id: 6, name:'Silimagna granulado', presentacion: 'Bulto 50kg',Tipo: 'Organico', urlImg: 'https://i.ibb.co/J5vrQRn/silimagna.jpg'},
    {id: 7, name:'Imbiosil', presentacion: 'Bulto 50kg',Tipo: 'Organico', urlImg: 'https://i.ibb.co/zR69Fx5/inbiosil.png'},
  ]

  const showCategories = (tipo) => {
    setProducts(productsv);
    console.log(products);    
    const newProducts= products.filter(product => product.Tipo === tipo);
    setProducts(newProducts);
    console.log(newProducts);
  }

  //los dynamic values se llaman en el template como: { dynamicValue } 
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <Products products={products} showCategories={showCategories}/>

      </div>
    </div>
    );
}
export default App;