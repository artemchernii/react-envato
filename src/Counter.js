import { useState } from 'react';
import PropTypes from "prop-types";

function Counter(props) {
    const [counter, setCounter] = useState(props.startAt);

    // setTimeout(() => setCounter(counter + props.startAt), 1000);
    const [inputVal, setInputVal] = useState('');
    const increm = (event) => {
        console.log(event.target.value);
        setInputVal(event.target.value);
    };

    const countUp = () => setCounter(counter + props.countBy);
    const countDown = () => setCounter(counter - props.countBy);

    return (
        <>
            <p>Start at: {props.startAt}</p>
            <p>Count by: {props.countBy}</p>
            <h4>Counter: {counter}</h4>
            <button className="btn btn-primary" onClick={countUp}>
                Count Up
            </button>
            <button className="btn btn-danger" onClick={countDown}>
                Count Down
            </button>
            <input type="text" onChange={increm} />
            <h6>{inputVal}</h6>
        </>
    );
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1,
};

Counter.propTypes = {
    startAt: PropTypes.number,
    countBy: PropTypes.number,
}

export default Counter;
