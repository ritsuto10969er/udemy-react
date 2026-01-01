const Example = () => {
  const clickHandler = () => {
    alert("Button clicked!");
  } 
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

export default Example;
