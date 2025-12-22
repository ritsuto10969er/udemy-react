import "./Child.css";
import React from 'react';

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus eos, reprehenderit ipsam magnam voluptatem rerum perspiciatis animi est odio tempore a. Illo dignissimos nisi vero omnis totam voluptatum nobis!</p>
    </React.Fragment>
    
  );
};

export default Child;
