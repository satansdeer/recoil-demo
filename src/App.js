import React from 'react';
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil';

const counterState = atom({
  key: "counterState",
  default: 0
})

const x2Selector = selector({
  key: "x2Selector",
  get: ({get}) => {
    const count = get(counterState)

    return count * 2;
  }
})

function App() {
  const [count, setCount] = useRecoilState(counterState)
  const doubleCount = useRecoilValue(x2Selector)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
