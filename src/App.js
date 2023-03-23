import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Class Counter</h1>
      <Counter initialCount={10} />
      <h1>Function Counter</h1>
      <CounterHooks initialCount={10} />
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
