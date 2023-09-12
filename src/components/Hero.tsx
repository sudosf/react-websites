import React from "react";
import reactImg from "../assets/grid.jpg"; // image reference


export default function Hero() {

    return (
        <section className="card mx-auto w-75">
            <img src={reactImg} className="img-fluid" alt="grid-image" />
            <div className="card-body">
                <h5 className="card-title">Grid Space</h5>
                <p className="card-text">
                    Some quick example text to build on the card title 
                    and make up the bulk of the card's content.
                </p>
            </div>
        </section>
    );

};