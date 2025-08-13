import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onInc = () => {
        setCount(count + 1);
    }
    const onDec = () => {
        setCount(count - 1);
    }

    return (
        <div className={classes.button}>
            <p>{count}</p>
            <button onClick={onInc}>inc</button>
            <button onClick={onDec}>dec</button>
        </div>
    );
};

