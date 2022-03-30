import styled from "styled-components";
import { ReactComponent as IconModalDelete } from "../../assets/images/modaldelete.svg";
import { ReactComponent as IconMediaImage } from "../../assets/images/mediaImage.svg";

const ModalComponent = ({ activeModal }) => {
  return (
    <>
      <ModalWrap>
        <ModalDeleteWrap onClick={() => activeModal(false)}>
          <IconModalDelete />
        </ModalDeleteWrap>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>새 게시물 만들기</ModalTitle>
          </ModalHeader>

          <ModalContentWrap>
            <IconMediaImageWrap>
              <IconMediaImage />
            </IconMediaImageWrap>
            <SeleteInComput>컴퓨터에서 선택</SeleteInComput>
          </ModalContentWrap>
        </ModalContainer>
      </ModalWrap>
    </>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalDeleteWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
`;

const ModalContainer = styled.div`
  width: 80vw;
  max-width: 664px;
  height: 70vh;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #ccc;
`;
const ModalTitle = styled.title`
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-weight: 600;
`;
const ModalContentWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
`;

const IconMediaImageWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
`;

const SeleteInComput = styled.button`
  background: #0095f6;
  border: 0;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  color: #fff;
  position: absolute;
  bottom: 150px;
  right: 50%;
  transform: translateX(50%);
`;

export default ModalComponent;
