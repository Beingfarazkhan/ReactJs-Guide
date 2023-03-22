import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  return (
    <>
      <h1>Class Counter</h1>
      <Counter initialCount={10} />
      <h1>Function Counter</h1>
      <CounterHooks initialCount={10} />
    </>
  );
}

export default App;
