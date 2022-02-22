import "./App.css";
import React, { useState } from "react";
import ChildrenComponent from "./components/ChildrenComponent";

const App = () => {
  const [txt, setTxt] = useState("");

  const setTxtFn = (data) => {
    return setTxt(data);
  };

  const onClickFn = () => {
    return setTxt("in Parent");
  };

  return (
    <div>
      <h1>{txt}</h1>
      <ChildrenComponent setTxtFn={setTxtFn} />
      <button onClick={onClickFn}>parent 클릭</button>
    </div>
  );
};

export default App;
