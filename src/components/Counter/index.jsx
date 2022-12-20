import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Count</button>
    </div>
  );
}

export default Counter;
