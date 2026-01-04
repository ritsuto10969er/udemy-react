import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
	const [array, setArray] = useState(numArray); 
	const shuffle = () => {
		const lastEl = array.slice(-1);
		console.log(lastEl);
		const otherEl = array.slice(0, -1);
		setArray([...lastEl, ...otherEl]);
	}
  return (
    <>
	<h3>{array}</h3>
	<button onClick = {shuffle}>shuffle</button>
    </>
  );
};

export default Example;
