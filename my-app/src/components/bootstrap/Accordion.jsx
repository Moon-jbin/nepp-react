import styled from "styled-components";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickFn = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  };

  const dataValue = data.map((item, index) => {
    return (
      <Item active={activeIndex === index} key={item.id}>
        <Header onClick={() => onClickFn(index)}>
          {item.title} <BtnArrow />
        </Header>
        <Body>{item.content}</Body>
      </Item>
    );
  });

  return (
    <>
      <List>{dataValue}</List>
    </>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 600px;
  margin: 50px auto;
  border: 1px solid #bbb;
  border-top: 0;
`;

const Body = styled.div`
  border-top: 1px solid #bbb;
  padding: 15px 10px 15px 10px;
  display: none;
`;

const BtnArrow = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  cursor: pointer;
  transition: transform 0.5s;
`;

const Item = styled.li`
  ${Body} {
    display: ${({ active }) => active && "block"};
  }
  ${BtnArrow} {
    transform: ${({ active }) => active && "rotate(-180deg)"};
  }
`;
const Header = styled.div`
  border-top: 1px solid #bbb;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 15px;
  background: #efefef;
`;

export default Accordion;
