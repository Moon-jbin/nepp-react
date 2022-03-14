import styled from "styled-components";
import { useEffect, useState } from "react";
const Modal = ({ onClose, onChange, name }) => {
  const [text, setText] = useState(name);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onClickSave = () => {
    onChange(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>Modal Heading</Header>
        <Contents>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </Contents>
        <BtnWrap>
          <CloseBtn onClick={onClose}>Close</CloseBtn>
          <SaveBtn onClick={onClickSave}>Save Changes</SaveBtn>
        </BtnWrap>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  min-width: 300px;
  border-radius: 4px;
  padding: 0 0 10px;
`;

const Header = styled.div`
  width: 300px;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px;
  font-size: 24px;
`;
const Contents = styled.div`
  width: 300px;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0 0;
`;

const Btn = styled.button`
  color: #fff;
  outline: none;
  height: 30px;
  border-radius: 5px;
`;

const CloseBtn = styled(Btn)`
  background: #6c757d;
  border: 1px solid #6c757d;

  width: 60px;
`;
const SaveBtn = styled(Btn)`
  background: #0d6efd;
  border: 1px solid #0d6efd;
  width: 105px;
  margin: 0 10px 0 10px;
`;

export default Modal;
