import React, { Component } from 'react'
import {Row, Col} from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
export default class Footer extends Component {
    render() {
        return (
            <section className="piedpage">
                <div className="container">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={3}>
                            <a class="nav-link navbar-brand" href="logo">COMPAGNY <span className="logo">LOGO</span></a>
                            <p>
                                cette image sans plus attendre dans le cadre d’un essai gratuit.
                                En outre, accédez cette image sans plus attendre dans le cadre d’un essai gratuit.
                            </p>
                            <div className="adresse">
                                <p className=""><FaEnvelope /><span className="texticone">marcelvaka@gmail.com</span></p>
                                <p className=""><FaPhoneAlt /><span className="texticone">+225 78914610</span></p>
                                <p className=""><FaMapMarkerAlt /><span className="texticone">Abidjan - Cocody</span></p>
                            </div>
                        </Col>
                        <Col md={2} >
                            <h5 className="entete">Quick links</h5>
                            <ul className="enum">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Trmoignage</li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="entete">Quick links</h5>
                            <ul className="enum">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Trmoignage</li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="entete">Quick links</h5>
                            <ul className="enum">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Trmoignage</li>
                            </ul>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                    <Row className="ligne">
                        <Col md={2}></Col>
                        <Col md={6}>
                            All Right Reserved By <span className="logo">VAKA</span> 2020
                        </Col>
                        <Col md={2}>
                            <span className="resossocio">
                                <TiSocialFacebook /><TiSocialTwitter /><TiSocialLinkedin />
                            </span>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </div>
            </section>
        )
    }
}
