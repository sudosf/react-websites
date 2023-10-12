import "./App.css";

/* Components */
import Navbar  from "./components/Navbar2";
import Meme from "./components/Meme";

export default function App() {

	return (
	<>
		<div className="container-fluid bg-secondary">
			< Navbar />
			< Meme />
		</div>
	</>
	);
}

