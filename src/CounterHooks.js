import React, { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  const style = useContext(ThemeContext);
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
// Functional Components are much more popular than Class Components because of hooks
