import "./App.css";

/* Components */
import Navbar2 from "./components/Navbar2";
import Meme from "./components/Meme";
import InfoMain from "./components/InfoMain";
import React from "react";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <>
            <div className={darkMode ? "bg-dark" : "bg-white"}>
                <Navbar2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <InfoMain darkMode={darkMode} />
            </div>
        </>
    );
}
