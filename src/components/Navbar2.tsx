import reactLogo from "../assets/react.svg"; // image reference

/* NavBar Component*/
export default function Navbar() {

  return (

	<nav className="navbar bg-dark shadow">
		<div className="container-fluid d-flex text-white">
			<a className="navbar-brand text-white" href="#">
				<img src={reactLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
				MemeGenerator
			</a>
			<p className="">React Learning</p>
		</div>
	</nav>
  );
}
