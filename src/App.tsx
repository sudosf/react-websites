// import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero.tsx";
import InfoMain from "./components/InfoMain.tsx";

/* Components */
import "./components/Navbar.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  return (
  
    <>
      <Navbar />
      <Hero />
    </>
  );
}

