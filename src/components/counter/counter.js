import './counter.css';
import React, { useState } from 'react';

const initialValue = 0;

const Counter = () => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
