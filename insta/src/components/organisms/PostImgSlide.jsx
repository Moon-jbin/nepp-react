import styled from "styled-components";
import {useState, useRef, useEffect} from "react";

const PostImgSlide = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerEl = useRef(null);
  useEffect(()=>{
    const onResize = () => {
      const {width} = window.getComputedStyle(containerEl.current)
      setContainerWidth(width.slice(0,-2))
    }
    onResize();
    window.addEventListener("resize",onResize);

    return () => {
      window.addEventListener("resize",onResize);
    }
  },[])

  


  const onClickFn = (num)=> {
    if(num===-1 && activeIndex===0){
      setActiveIndex(data.length -1)
    }else{
      setActiveIndex(activeIndex+num);
    }


    
  }





  const imageList = data.map((item) => {
    return <PostImage key={item.id} src={item.image} />;
  });
  return  <Container ref={containerEl}>
            <ImageWrap containerWidth={containerWidth} activeIndex={activeIndex}>
              {imageList}
            </ImageWrap>
            { data.length !== 1 ? <BtnPrev onClick={()=>onClickFn(-1)} >이전</BtnPrev> : null}
            { data.length !== 1 ? <BtnNext onClick={()=>onClickFn(1)}>다음</BtnNext> : null}
          </Container>;
};

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  display: flex;
  transition:  transform .1s;
  transform: ${({containerWidth,activeIndex})=>
    `translateX(${containerWidth * activeIndex * -1}px)`
};

`;

const PostImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const BtnPrev = styled.button`
  position: absolute;
  top:50%;
  left: 10px;
`;
const BtnNext = styled.button`
  position: absolute;
  top:50%;
  right: 10px;
`;

export default PostImgSlide;
