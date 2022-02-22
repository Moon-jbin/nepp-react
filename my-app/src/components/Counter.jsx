import { useState } from "react";

const Counter = () => {
  // const array = [1, 2];
  // const one = array[0]
  // const two = array[1]
  // const [one, two] = array;

  const [number, setNumber] = useState(0);
  let number2 = 0;
  const onClickFn = () => {
    setNumber(number + 1);
    number2++;
    console.log(number2);
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={onClickFn}>추가</button>
    </>
  );
};

export default Counter;
