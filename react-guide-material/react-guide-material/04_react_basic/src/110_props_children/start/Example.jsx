import Profile from "./components/Profile";
import Container from "./components/Container";
// import { Children } from "react";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" 
      firstChild = {<Profile {...profile[0]} />}
      lastChild = {<Profile {...profile[1]} />}
      />        
    </div>
  );
};

export default Example;
