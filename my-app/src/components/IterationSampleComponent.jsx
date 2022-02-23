import React from "react";
import { useState } from "react";

const IterationSampleComponent = () => {
  // const names = ["눈사람", "얼음", "눈", "바람"];

  const [names, setNames] = useState(["눈사람", "얼음", "눈", "바람"]);

  const [inputText, setInputText] = useState("");

  const onChangeFn = (e) => {
    return setInputText(e.target.value);
  };

  let nextName = names;
  const onClickFn = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    nextName = [...names, inputText];
    setNames(nextName);
    setInputText("");
  };

  const onDoubleClickFn = () => {
    console.log("click");
  };

  const nameList = names.map((item, idx) => {
    return (
      <li key={idx} onDoubleClick={onDoubleClickFn()}>
        {item}
      </li>
    );
  });

  return (
    <>
      <input type="text" value={inputText} onChange={onChangeFn} />
      <button onClick={onClickFn}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSampleComponent;
