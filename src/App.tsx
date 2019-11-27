import React, { useState } from "react";
import Button from "./Button";

const functions: Set<any> = new Set();

const App = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);
  const incrementDelta = () => setDelta(delta => delta + 1);
  const increment = () => setC(c => c + delta);
  functions.add(increment);
  functions.add(incrementDelta);

  return (
    <>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br />
      <div>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </div>
      <br />
      <div> Newly Created Functions: {functions.size - 2} </div>
    </>
  );
};

export default App;
