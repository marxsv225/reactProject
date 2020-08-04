import React from 'react'
import { BsSearch, BsFillTrash2Fill } from "react-icons/bs";
export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm mynav">
                <ul class="navbar-nav nav-center">
                    <li class="nav-item ">
                        <a class="nav-link navbar-brand" href="logo">COMPAGNY <span className="logo">LOGO</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="accueil">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="apropos">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="porfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="feature">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shop">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact">Contact</a>
                    </li>
                    <li class="nav-item icon">
                        <a class="nav-link" href="recherche"><BsSearch /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="panier"><BsFillTrash2Fill /></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
