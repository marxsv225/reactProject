import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <section className="nouvelle container">
               <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 infos-news">
                        <p>Drean Big Achive Big</p>
                        <h3 className="info-new"> WE TAKE YOUR BUSINESS TO
                        <span> NEW HIGHTS</span></h3>
                        <p>
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
                        </p>
                        <button className="bouton-orange">Purchase now</button>
                    </div>
                    <div className="col-md-4 colnew"></div>
                    <div className="col-md-2"></div>
                </div>
            </section>
        )
    }
}
