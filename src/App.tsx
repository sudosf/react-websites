// import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero.tsx";

/* Components */
import "./components/Navbar.tsx";
import Navbar from "./components/Navbar.tsx";
import Card from "./components/Card.tsx";

export default function App() {
  return (
  
    <>
      <Navbar />
  
    <div className="container-fluid d-flex flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}

