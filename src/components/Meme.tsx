import React from "react";

import r1Img from "../assets/r1.jpg";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: ""
    });

    function getMeme() {
        setMeme(prevMeme => ({
            topText: "A",
            bottomText: "B"
        }));
    };


    return (
        <main className="container my-5">
            <div className="text-center mb-3">
                <p>Enter Meme Text</p>
            </div>

            <div className="mb-3 d-flex">
                <input type="text" className="form-control me-2 border border-secondary" id="topTextInput" placeholder="Top Text" />
                <input type="text" className="form-control ms-2 border border-secondary" id="bottomTextInput" placeholder="Bottom Text"/>
            </div>

            <div className="text-center mt-4 d-grid gap-2">
                <button className="btn btn-success btn-lg btn-block" name='submit' onClick={getMeme}>
                    Get a new Meme image
                </button>
            </div>

            <div className="text-center mt-4 d-grid gap-2">
                <p>{meme.topText}</p>
                <img src={r1Img} className="img-fluid w-100 h-100 shadow rounded-top" alt="grid-image" />
                <p>{meme.bottomText}</p>

            </div>
        </main>
    );
}