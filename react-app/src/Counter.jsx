import { useState } from "react";

export default function Counter () {
    let [count, setCount] = useState(0);

    let incCount = ()  => {
        setCount(count+1);
        console.log(count);
    }
    return (
        <>
            <h3>count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    )
}