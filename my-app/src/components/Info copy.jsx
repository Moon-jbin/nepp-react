import React from "react";
import { useState, useEffect } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useSta
  
  // useEffect를 쓰는 경우
// 1. 이 컴포넌트가 최초 렌더링 될 때 한번만 실행하고 싶을 경우
// 2. 어떤 변수가 변할 때 마다 함수를 실행시키고 싶은 경우

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
