function InfoMain(props) {
    const color_mode = props.darkMode
        ? "bg-dark text-white"
        : "bg-white text-dark";

    return (
        <main className={color_mode}>
            <h1 className="text-info">Fun Facts About React </h1>
            <ul className={color_mode + " list-group list-group-numbered"}>
                <li className={color_mode + " list-group-item border-0"}>
                    Was first released in 2013
                </li>
                <li className={color_mode + " list-group-item border-0"}>
                    A second item
                </li>
                <li className={color_mode + " list-group-item border-0"}>
                    Over 100k stars on GitHub
                </li>
                <li className={color_mode + " list-group-item border-0"}>
                    Maintained by Meta (Former Facebook)
                </li>
                <li className={color_mode + " list-group-item border-0"}>
                    Runs on mobile apps
                </li>
            </ul>
        </main>
    );
}

export default InfoMain;
