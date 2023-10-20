import React from "react";
import reactImg from "../assets/grid.jpg"; // image reference


export default function Hero() {

    return (
        <section className="card mx-auto" style={{'width': '25rem'}}>
            <img src={reactImg} className="img-fluid" alt="grid-image" />
            <div className="card-body">
                
                { /* Javascript inside jsx */ }
                <h5 className="card-title">Grid Space @{new Date().getFullYear()}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title 
                    and make up the bulk of the card's content.
                </p>
            </div>
        </section>
    );

}