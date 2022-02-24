import React from "react";
import { useState } from "react";

const IterationSampleComponent = () => {
  // const names = ["눈사람", "얼음", "눈", "바람"];
  const [nextId, setNextId] = useState(5);
  const [names, setNames] = useState([
    { id: 1, name: "눈사람" },
    { id: 2, name: "얼음" },
    { id: 3, name: "눈" },
    { id: 4, name: "바람" },
  ]);

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
    nextName = [...names, { id: nextId, name: inputText }];
    setNextId((prev) => {
      return prev + 1;
    });
    setNames(nextName);
    setInputText("");
  };

  const onDoubleClickFn = (id) => {
    const nextNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(nextNames);
  };

  const nameList = names.map((item, idx) => {
    return (
      <li key={item.id} onDoubleClick={() => onDoubleClickFn(item.id)}>
        {item.id}) {item.name}
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
