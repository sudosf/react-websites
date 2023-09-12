import React from "react";
import r1Img from "../assets/r1.jpg"; 

interface Props {
    img: string;
    name: string;
    tel: string;
    email: string;

}

export default function Card(props: Props) {
   
    return (
        <section className="card mx-auto my-2 shadow" style={{'width': '18rem'}}>
        <img src={props.img} className="img-fluid w-100 shadow rounded-top" alt="grid-image" />
        <div className="card-body">
            
            <h1 className="card-title">{props.name}</h1>
            <p className="card-text">
                <i className="fa fa-solid fa-phone"></i>
                &nbsp; {props.tel}
            </p>

            <p className="card-text">
                <i className="fa-solid fa-envelope"></i>
                &nbsp; {props.email}         
            </p>
        </div>
    </section>
    );

} 