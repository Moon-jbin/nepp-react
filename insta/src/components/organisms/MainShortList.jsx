import styled from "styled-components";

const MainShortList = ({ data }) => {
  const shortList = data.map((item) => {
    return (
      <ShortsItem key={item.id}>
        <ShortsUserProfile src={item.user.profileImage} />
        <ShortUserId>{item.user.name}</ShortUserId>
      </ShortsItem>
    );
  });

  return (
    <>
      <ShortsWrap>{shortList}</ShortsWrap>
    </>
  );
};

const ShortsWrap = styled.div`
  width: 100%;
  height: 119px;
  border: 1px solid #ccc;
  display: flex;
  padding: 0 12px;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;
const ShortsItem = styled.div`
  width: 80px;
  text-align: center;
`;
const ShortsUserProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid greenyellow;
`;
const ShortUserId = styled.span`
  font-size: 12px;
`;

export default MainShortList;
