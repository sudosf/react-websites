import reactLogo from "../assets/react.svg"; // image reference

/* NavBar Component*/
export default function Navbar() {

  return (

	<nav className="navbar bg-warning shadow">
		<div className="container-fluid d-flex">
			<a className="navbar-brand" href="#">
				<img src={reactLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
				MemeGenerator
			</a>
			<p className="">Hi There</p>
		</div>
	</nav>
  );
};
