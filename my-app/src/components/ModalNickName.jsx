import styled from "styled-components";
import { useState, useEffect } from "react";
const ModalNickName = ({ onClose, nickName, onChange }) => {
  const [text, setText] = useState(nickName);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onClickFn = () => {
    onChange(text);
    onClose();
  };
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Body>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </Body>
        <Footer>
          <BtnSave onClick={onClickFn}>Save</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: auto;
  background: #fff;
`;
const Body = styled.div``;
const Footer = styled.div``;
const BtnSave = styled.button``;

export default ModalNickName;
