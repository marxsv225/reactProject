import React from 'react'
import Navbar from './Navbar';
import InfoHeader from "./InfoHeader";

export default function Header() {
    return (
        <section className="myheader">
            <div className="img-bg">
                <Navbar />
                <InfoHeader />
            </div>
        </section>
    )
}
