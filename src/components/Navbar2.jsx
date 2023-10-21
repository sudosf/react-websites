import reactLogo from "../assets/react.svg"; // image reference

/* NavBar Component*/
export default function Navbar(props) {
    const color_mode = props.darkMode
        ? "bg-dark text-white"
        : "bg-white text-dark";

    return (
        <nav className={color_mode + " navbar shadow mb-5"}>
            <div className={color_mode + " container-fluid d-flex"}>
                <a className={color_mode + " navbar-brand"} href="#">
                    <img
                        src={reactLogo}
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    MemeGenerator
                </a>

                <div className="d-flex">
                    <label className="me-1 form-check-label">light</label>

                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleDarkMode}
                        />
                        <label className="form-check-label">dark</label>
                    </div>
                </div>

                <p className="">React Learning</p>
            </div>
        </nav>
    );
}
