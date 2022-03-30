import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import PageBtnComponent from "./PageBtnComponent";

const PostImgSlide = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerEl = useRef(null);
  useEffect(() => {
    const onResize = () => {
      const { width } = window.getComputedStyle(containerEl.current);
      setContainerWidth(width.slice(0, -2));
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.addEventListener("resize", onResize);
    };
  }, []);

  const onClickFn = (num) => {
    if (num === -1 && activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else if (num === 1 && activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + num);
    }
  };

  const imageList = data.map((item, idx) => {
    return <PostImage key={idx} src={item} />;
  });

  const PageBtnList = data.map((item, idx) => {
    return <PageBtn key={item.id} active={activeIndex === idx}></PageBtn>;
  });

  return (
    <Container ref={containerEl}>
      <ImageWrap containerWidth={containerWidth} activeIndex={activeIndex}>
        {imageList}
      </ImageWrap>
      {data.length !== 1 ? (
        activeIndex !== 0 ? (
          <BtnPrev onClick={() => onClickFn(-1)}></BtnPrev>
        ) : null
      ) : null}
      {data.length !== 1 ? (
        activeIndex !== data.length - 1 ? (
          <BtnNext onClick={() => onClickFn(1)}></BtnNext>
        ) : null
      ) : null}

      <PageBtnComponent data={data} />
      {data.length !== 1 ? <PageBtnWrap>{PageBtnList}</PageBtnWrap> : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  transition: transform 0.1s;
  transform: ${({ containerWidth, activeIndex }) =>
    `translateX(${containerWidth * activeIndex * -1}px)`};
`;

const PostImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const BtnPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 10px;
  height: 10px;
`;
const BtnNext = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
`;

const PageBtnWrap = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 5px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
`;

const PageBtn = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 5px 0 0;
  border: 1px solid red;
`;

export default PostImgSlide;
