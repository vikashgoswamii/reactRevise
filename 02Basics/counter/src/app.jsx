import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => {
        if (count < 5) {
          setCount(count + 1);
        }
      }}>
        Increment
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}
