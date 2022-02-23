import React from "react";
import { useState } from "react";
const TextComponent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(newForm);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      alert("완료");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message를입력하세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </>
  );
};

export default TextComponent;
