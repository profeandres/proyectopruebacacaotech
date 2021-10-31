//IMPORTACIONES GENERALES
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//IMPORTACIÓN DEL ROUTER (NO TOCAR A MENOS QUE SEA NECESARIO)
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//PONER AQUÍ LOS COMPONENTES JUNTO CON SU CONFIGURACIÓN ROUTER.

import ProductList from "./components/products-list.component";
import Home from "./components/home.component";

//PLANTILLA APP CON TODOS LOS CODIGOS DE LA PÁGINA HTML/CSS/BOOTSTRAP

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              {/* MARCA DE LA PÁGINA */}
              <Navbar.Brand>
                <Link to={"/home"} className="nav-link">
                  CACAOTECH PRODUCTS APP
                </Link>
              </Navbar.Brand>

              {/*AQUI SE PONE LA NAVEGACIÓN COMO LA BARRA PRINCIPAL*/ }
              <Nav className="justify-content-end">
                
                {/* PRIMERA OPCION */}
                <Nav>
                  <Link to={"/products-list"} className="nav-link">
                    Product List
                  </Link>
                </Nav>

                {/* SEGUNDA OPCION */}
                {/* <Nav>
                <Link to={"/edit-student/:id"} className="navlink">
                Edit Student
                </Link>
                </Nav> */}

                {/* TERCERA OPCION */}  
                {/* <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav> */}

              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/home' component={Home} />
                  <Route path="/products-list" component={ProductList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>);
}
export default App;