import React from "react";

export default function Count() {

    
    const [starsData, setStarsData] = React.useState({});
    const [count, setCount] = React.useState(1);
    
    React.useEffect(() => {
        // side effect functions here
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStarsData(data);
            })
    }, [count]); // dependencies array []
    console.log("Comp rendered");


    return (
        <div>
            <pre>{JSON.stringify(starsData, null, 0)}</pre>
            <h2>The count is {count}</h2>
            <h3>Name: {JSON.stringify(starsData['name'])}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        </div>
    );
}