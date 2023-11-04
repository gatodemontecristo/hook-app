import { useState } from "react";

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);


  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

    </>
  );
};
