import React, { Component } from 'react'
export default class InfoHeader extends Component {
    render(){
        return (
            <div className="moncontenu container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 info">
                        <h3 className="info-head">THE COMPAGNY <span className="logo">TITLE</span> AND <span className="logo">SLOGAN</span> GOES HERE</h3>
                        <p>
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme Du texte.
                        </p>
                        <button className="bouton-orange">Purchase now</button>
                        <button className="bouton-bleu">Contact us</button>
                    </div>
                    <div className="col-md-4 colhome"></div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}
