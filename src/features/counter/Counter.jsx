import { useSelector, useDispatch } from "react-redux";
import {decrement,	increment,	selectCount, reset} from "./counterSlice";
import { useState } from "react";


const Counter = () => {

    const handleIncrementAmount = (e) => {
        setIncrementAmount(Number(e.target.value))
    }

    const [incrementAmount, setIncrementAmount] = useState(1)
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div>
            {count}<br/><br/>
			<button onClick={() => dispatch(increment(incrementAmount))}>+</button> {/* incrementAmount IS THE PAYLOAD */}
			<button onClick={() => dispatch(decrement(incrementAmount))}>-</button>
            <br /><br />
            <input style={{width: '70px', fontSize: '.5rem'}} type="number" min={1} step={1} value={incrementAmount} onChange={handleIncrementAmount}/>
            <br />
            <button style={{width: '70px', fontSize: '.5rem'}} onClick={() => dispatch(reset())}>Reset</button>

		</div>
	);
};
export default Counter;
