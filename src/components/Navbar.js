import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../logo.png';


export default class NavBar extends Component {
  render() {
    return (

      <Navbar expand="lg" className="navbar navbar-expand-xl bg-info navbar-info  justify-content-between">

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="navbar navbar-expand-xl bg-info navbar-info  justify-content-between">
            <ul className="navbar-nav ">
              <li className="nav-item ml-2">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link" href="/un">Últimas Noticias</a>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link" href="/galeriaFotos">Galeria de Fotos</a>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link" href="/galeriaNosotros">Nosotros</a>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link" href="/contactos">Contactos</a>
              </li>
            </ul>
          </div>

        </Navbar.Collapse>

      </Navbar>

    );
  }
}
