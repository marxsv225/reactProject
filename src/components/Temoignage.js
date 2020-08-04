import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import caroussel1 from "../images/caroussel1.jpg";
// import caroussel2 from "../images/caroussel2.jpg";
import bgc from "../images/bgc.png";

export default class Temoignage extends Component {
    state={
        temoin:[
            {
                nom:"ABC",
                photo: bgc,
                message:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            },
            {
                nom:"DEF",
                photo: bgc,
                message:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            },
            {
                nom:"GHI",
                photo: bgc,
                message:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            }
        ]
    }
    render() {
        return (
            <section className="myheader">
                <div className="Fondtemoin">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                                <h3 className="titretemoin">Temoignage</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <Carousel>
                                {this.state.temoin.map((item, index) => {
                                return (
                                        <Carousel.Item key={index} className="mycaroussel">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-8">
                                                    <Carousel.Caption>
                                                    <h3>{item.message}</h3>
                                                    <p>{item.nom}</p>
                                                    </Carousel.Caption>
                                                </div>

                                                <div className="col-md-6 col-sm-4">
                                                    <img
                                                    className="d-block w-100 taille"
                                                    src={item.photo}
                                                    alt="First slide"
                                                    />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    )
                                })}
                                </Carousel>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
