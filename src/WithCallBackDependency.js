import React, { useState, useCallback } from "react";
import Button from "./Button";

const functions = new Set();

const WithCallBackDependency = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), [delta]);

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

export default WithCallBackDependency;
