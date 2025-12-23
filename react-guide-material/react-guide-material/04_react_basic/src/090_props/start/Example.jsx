import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    const obj = {
        num: 10,
        name: 'Ritu',
        age: 22
    }
    return (
        <>
            <Child
                num={10}
                fn={hello}
                bool
                obj={obj}
            />
            {/* <Child color = 'red'/>
            <Child color = 'green'/> */}
            
        </>
    )
};

export default Example;
