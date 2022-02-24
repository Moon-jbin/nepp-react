import React from "react";
import { useState, useEffect } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    // console.log("렌더링완료");
    console.log("렌더링 완료", name);
    return () => {
      // console.log("clean up");
      console.log("clean up", name);
    };
  }, [name]);

  const onChangeNameFn = (e) => {
    return setName(e.target.value);
  };

  const onChangeNickFn = (e) => {
    return setNickName(e.target.value);
  };
  return (
    <>
      <input type="text" value={name} onChange={onChangeNameFn} />
      <input type="text" value={nickName} onChange={onChangeNickFn} />

      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>
    </>
  );
};
export default Info;
