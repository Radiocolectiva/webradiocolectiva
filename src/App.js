import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import UN from "./pages/UN";
import galeriaFotos from "./pages/galeriaFotos";
import galeriaNosotros from "./pages/galeriaNosotros";
import Contactos from "./pages/Contactos";
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart/';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/productlist" component={Productlist} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/un" component={UN} />
            <Route exact path="/galeriaFotos" component={galeriaFotos} />
            <Route exact path="/galeriaNosotros" component={galeriaNosotros} />
            <Route exact path="/Contactos" component={Contactos} />
            <Route component={Default} />
          </Switch>
          <Modal />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
