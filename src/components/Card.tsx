import React from "react";
import r1Img from "../assets/r1.jpg"; 

export default function Card() {
   
    return (
        <section className="card mx-auto my-2" style={{'width': '18rem'}}>
        <img src={r1Img} className="img-fluid w-100 p-2 shadow rounded" alt="grid-image" />
        <div className="card-body">
            
            <h1 className="card-title">Jerry Docks</h1>
            <p className="card-text">
                <i className="fa fa-solid fa-phone"></i>
                &nbsp; (+27) 72 050 3491
            </p>

            <p className="card-text">
                <i className="fa-solid fa-envelope"></i>
                &nbsp; jerry.docks@mouse.cheese         
            </p>
        </div>
    </section>
    );

}