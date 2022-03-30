import styled from "styled-components";
import { MainRight, MainPostList, MainShortsList } from "../organisms";
// import { postList } from "../../datas/posts";
import { shortsList } from "../../datas/shorts";
import { useEffect, useState } from "react";
import { getPostsMain } from "../../apis/post.js";
const Main = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const { postList } = await getPostsMain();
    setPostList(postList);
  };

  return (
    <>
      <Container>
        <Left>
          <MainShortsList data={shortsList} />
          <MainPostList data={postList} />
        </Left>
        <MainRight />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  margin: 0 20px 0 0;
`;

export default Main;
