import React, {Component} from 'react'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
// import Navbar from "react-bootstrap/Navbar";
export default class Footer extends Component {
    render(){
        return (
            <div expand="lg">
                <nav className="navbar  navbar-expand-md mynav justify-content-center">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav nav-center">
                            <li className="nav-item ">
                                <a className="nav-link navbar-brand" href="logo">COMPAGNY <span className="logo">LOGO</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="accueil">Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="apropos">About us</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="porfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="feature">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                            <li className="nav-item icon">
                                <a className="nav-link" href="recherche"><BsSearch /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="panier"><FaShoppingCart /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}