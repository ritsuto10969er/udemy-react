import { useState } from "react";
 
const Example = () => {
    const [countA, setCountA]  = useState(0);
    const [countB, setCountB]  = useState(10);
   return (
    <>
        <p>Button A を{countA}回押しました</p>
        <button onClick = {() => 
            setCountA(countA +1)
        }>Button A</button>

        <p>Button B を{countB}回押しました</p>
        <button onClick = {() => 
            setCountB(countB +1 )
        }>Button B</button>
    </>
   )
};

export default Example;
