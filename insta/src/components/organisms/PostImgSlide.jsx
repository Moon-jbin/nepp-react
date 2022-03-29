import styled from "styled-components";

const PostImgSlide = ({ data }) => {
  const imageList = data.map((item) => {
    return <PostImage key={item.id} src={item.image} />;
  });
  return <Container>{imageList}</Container>;
};

const Container = styled.div`
  width: 100%;
`;
const PostImage = styled.img`
  width: 100%;
`;

export default PostImgSlide;
