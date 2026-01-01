import { useState } from "react";

const Example = () => {
  let [valu, setVal] = useState("");
  return (
    <>
      <input 
      type="text"
      onChange={(e) => {
        setVal(e.target.value)
      }}
      /> = {valu}
    </>
  );
};

export default Example;
