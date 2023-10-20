interface Data {
    img: string;
    name: string;
    tel: string;
    email: string;
    valid: boolean;
}

export default function Card(props: Data) {
    const nums: number[] = [1, 2, 4, 3, 5];
    const names: string[] = ["a", "bob", "eli"];

    const testOne = nums.map(function (item: number) {
        return item * item;
    });

    const testTwo = names.map(function (name: string) {
        return name[0].toUpperCase() + name.slice(1);
    });

    // console.log(props);

    return (
        <section
            className="card mx-auto my-2 shadow"
            style={{ width: "18rem" }}
        >
            <img
                src={props.img}
                className="img-fluid w-100 h-100 shadow rounded-top"
                alt="grid-image"
            />
            <div className="card-body">
                <h1 className="card-title">{props.name}</h1>

                <p
                    className="card-text"
                    style={{ color: props.valid ? "green" : "red" }}
                >
                    <i className="fa fa-solid fa-phone"></i>
                    &nbsp; {props.tel}
                </p>

                <p className="card-text">
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; {props.email}
                </p>
            </div>
        </section>
    );
}
