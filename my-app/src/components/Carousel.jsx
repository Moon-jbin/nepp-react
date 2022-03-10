import styled from "styled-components";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carousel = data.map((item, index) => {
    return <Item key={item.id} src={item.img} active={activeIndex === index} />;
  });

  const onClickButton = (index) => {
    setActiveIndex(index);
  };

  const pageButton = data.map((item, index) => {
    return (
      <BtnIndex
        key={item.id}
        onClick={() => onClickButton(index)}
        active={activeIndex === index}
      >
        {index + 1}
      </BtnIndex>
    );
  });

  const onClick = (num) => {
    if (num === -1 && activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else if (num === 1 && activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((activeIndex) => {
        return activeIndex + num;
      });
    }
  };

  return (
    <>
      <Wrapper>
        <List activeIndex={activeIndex}>{carousel}</List>
        <BtnPrev onClick={() => onClick(-1)}>이전</BtnPrev>
        <BtnNext onClick={() => onClick(1)}>다음</BtnNext>

        <ButtonList>{pageButton}</ButtonList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  overflow: hidden;
`;
const List = styled.div`
  display: flex;
  transform: ${({ activeIndex }) => `translateX(${-800 * activeIndex}px)`};
  transition: transform 1s;
`;
const Item = styled.img`
  /* position: absolute;
  top: 0;
  left: 0; */
  /* opacity: ${({ active }) => !active && "0"}; */
  /* transition: opacity 0.5s; */
  width: 800px;
  height: 600px;
`;

// Button css
const Btn = styled.button`
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
`;
const BtnPrev = styled(Btn)`
  left: 50px;
`;
const BtnNext = styled(Btn)`
  right: 50px;
`;

const ButtonList = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  background: ${({ active }) => active && "black"};
`;

export default Carousel;
