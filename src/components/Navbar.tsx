import reactLogo from "../assets/react.svg"; // image reference
import airbnb from "../assets/reactjs.png"; // image reference


/* NavBar Component*/
export default function Navbar() {
  // TODO
  // - Props
  
  return (
	<nav className="navbar bg-body-tertiary">
		<div className="container-fluid shadow pb-2">
			<a className="navbar-brand" href="#">
				<img className="img-fluid px-2" src={reactLogo} alt="" />
				airbnb
			</a>
		</div>
	</nav>
  );
};
