import React from "react";
import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const onClickfn = (e) => {
    return setCount((count) => {
      return count + e;
    });
  };

  return (
    <>
      <h1>현재 카운터 값은 {count} 입니다.</h1>
      <button onClick={() => onClickfn(1)}>+1</button>
      <button onClick={() => onClickfn(-1)}>-1</button>
    </>
  );
};

export default Counter2;
