import "./Container.css";

const Container = ({ title, children, firstChild, lastChild }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
      {firstChild}  
      {lastChild}
    </div>
  );
};

export default Container;
