import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "../Dropdown";
import Carousel from "../Carousel";
import Modal from "../Modal";
import { useState } from "react";
import ModalNickName from "../ModalNickName";
const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNickModal, setShowNickModal] = useState(false);
  const [name, setName] = useState("문종빈");
  const [nickName, setNickName] = useState("쫑");

  const onClickFn = () => {
    setShowModal(false);
  };

  const onClickNickModal = () => {
    setShowNickModal(false);
  };
  const onChange = (text) => {
    setName(text);
  };

  const onChangeNickName = (nickText) => {
    setNickName(nickText);
  };
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
      <Carousel data={carouselData} />

      <h2>
        이름 : {name}
        <button onClick={() => setShowModal(true)}>모달</button>
      </h2>
      {showModal && (
        <Modal name={name} onClose={onClickFn} onChange={onChange} />
      )}

      <h2>
        닉네임 : {nickName}
        <button onClick={() => setShowNickModal(true)}>모달</button>
      </h2>
      {showNickModal && (
        <ModalNickName
          nickName={nickName}
          onChange={onChangeNickName}
          onClose={onClickNickModal}
        />
      )}
    </>
  );
};

export default Bootstrap;
