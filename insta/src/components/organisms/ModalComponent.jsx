import styled from "styled-components";
import { ReactComponent as IconModalDelete } from "../../assets/images/modaldelete.svg";
import { ReactComponent as IconMediaImage } from "../../assets/images/mediaImage.svg";
import { useRef, useState } from "react";
import {postPosts} from "../../apis/post"
import {uploadImage} from "../../apis/upload";

const ModalComponent = ({activeModal }) => {
  const [imageList, setImageList] = useState([]); 
  const [content, setContent] = useState("");
  const fileEl = useRef(null);

  const onClickFn = () => {
    fileEl.current.click();
  }

  const onChangeFileFn = (e) => {
    const {files} = e.target;
    for(let i = 0 ; i<files.length; i++ ){
      const file = files[i];
      const reader = new FileReader();   // 브라우저에 있는 기능
      reader.onloadend = () => {
        setImageList((prev)=>[...prev, {preview: reader.result, file}]);
      }
      reader.readAsDataURL(file);
    }
  }

  const onClickSubmitFn = async () => {
    // 1. 이미지들을 서버로 업로드해서 이미지 주소들을 받아온다.
    // 2. s3 이미지 주소들을 content와 함께 서버로 보내서 새 post작성
   
   
    // const fileList = imageList.map(({file})=>file);

    // await uploadImage(fileList[0]);
    const promiseList = imageList.map(({file}) => uploadImage(file))
   const fileList = await Promise.all(promiseList)

    postPosts({fileList, content})   // API 함수

  };

  const onChangeContentChange = (e) => {
    return setContent(e.target.value);
  }

  return (
    <>
      <ModalWrap>
        <ModalDeleteWrap onClick={() => activeModal(false)}>
          <IconModalDelete />
        </ModalDeleteWrap>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>새 게시물 만들기
            <BtnSubmit onClick={onClickSubmitFn}>게시</BtnSubmit>
            </ModalTitle>
          </ModalHeader>

         
        <ModalContentWrap>
          {imageList.map(({preview})=>{
            return(
              <img key={preview} src={preview} width="100%" alt="이미지"/> 
            )
          })}
        <IconMediaImageWrap>
          <IconMediaImage />
        </IconMediaImageWrap>
        <SeleteInComput onClick={onClickFn}>컴퓨터에서 선택</SeleteInComput>
        <InputFile ref={fileEl} type="file"  accept="image/*" onChange={onChangeFileFn} multiple/>
        <Textarea onChange={onChangeContentChange} value={content}/>
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
const BtnSubmit = styled.button`

`;

const ModalContentWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  overflow: auto;
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
  cursor: pointer;
`;

const InputFile = styled.input`
  display: none;
`;
const Textarea = styled.textarea`

`;

export default ModalComponent;
