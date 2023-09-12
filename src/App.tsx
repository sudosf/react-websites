// import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero.tsx";

/* Components */
import "./components/Navbar.tsx";
import Navbar from "./components/Navbar.tsx";
import Card from "./components/Card.tsx";

/* Images */
import r1Img from "./assets/r1.jpg";
import r2Img from "./assets/r2.jpeg"; 
import r3Img from "./assets/r3.jpg"; 
import r4Img from "./assets/r4.jpg"; 


export default function App() {
  return (
  
    <>
	<Navbar />
  
    <div className="container-fluid d-flex flex-wrap">

		<Card 
			img={r1Img} 
			name="Sudo Ensudo" 
			tel="(+27) 77 057 5427" 
			email="ever.ensudo@mouse.cheese" 
			valid={true}
		/>
		<Card 
			img={r2Img} 
			name="William Doew" 
			tel="(+27) 72 983 3491" 
			email="cheesy.docks@mouse.cheese" 
			valid={true}
		/>
		<Card 
			img={r3Img} 
			name="Aleka Niguwa" 
			tel="(+27) 82 233 323" 
			email="elka.docks@mouse.cheese"
			valid={true}
		/>
		<Card 
			img={r4Img} 
			name="Ukhana Yinam" 
			tel="(+27) 62 320 8472" 
			email="yun.docks@mouse.cheese"
			valid={true}
		/>
		<Card 
			img={r2Img}
			name="null"
			tel="(+27) 72 983 3491" 
			email="cheesy.docks@mouse.cheese"
			valid={false}
		/>

    </div>
    </>
  );
}

