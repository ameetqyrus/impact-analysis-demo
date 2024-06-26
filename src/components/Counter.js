import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 3)}>Increment</button>
      <button onClick={() => setCount(count - 2)}>Decrement</button>
    </div>
  );
}

export default Counter;