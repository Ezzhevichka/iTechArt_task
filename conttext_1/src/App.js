import React from "react";
import { CountProvider, useCount } from "./Context";

function CountDisplay() {
  const { state } = useCount();
  return <div>{`Current count: ${state.count}`}</div>
}

function Counter() {
  const { dispatch } = useCount();
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Plus one
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Minus one
      </button>
    </div>
  )
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App;
