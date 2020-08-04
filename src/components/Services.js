import React, { Component } from 'react'
import { BsPeopleFill, BsFillAwardFill, BsFillBarChartFill } from "react-icons/bs";
import Title from "./Title";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<BsPeopleFill />,
                titre:"Assitance",
                texte:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            },
            {
                icon:<BsFillAwardFill />,
                titre:"Apport d'affaire",
                texte:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            },
            {
                icon:<BsFillBarChartFill />,
                titre:"Croissance éco.",
                texte:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page ",
            }
        ]
    }
    render() {
        return (
            <section className="fondservice">
                <div className="container">
                <Title title="OUR SERVICES" />
                    <div className="row">
                        <div className=""></div>
                        <div className="col-md-3">
                            <div className="services-center">
                                {this.state.services.map((item, index) => {
                                return (
                                    <article key={index} className="service">
                                        <span>{item.icon} </span>
                                        <h6>{item.titre} </h6>
                                        <p>{item.texte} </p>
                                    </article>
                                )
                                })}
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </section>
        )
    }
}
