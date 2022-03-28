import styled from "styled-components";
const Main = () => {
  return (
    <>
      <Container>
        <Left>
          <BoardWrap>
            <UserInfoWrap>
              <UserImg />
              <UserId></UserId>
              <OptionMore />
            </UserInfoWrap>
            <ContentWrap>
              <ImageBox></ImageBox>
              <BtnBox></BtnBox>
              <CommentWrap>
                <Like></Like>
                <CommentBox></CommentBox>
                <CommentInputBox>
                  <Emoticon />
                  <Input />
                  <SendBtn />
                </CommentInputBox>
              </CommentWrap>
            </ContentWrap>
          </BoardWrap>
        </Left>

        <Right>
          <ProfileWrap>
            <MyProfileWrap>
              <MyProfileImg src=" https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2" />
              <MyProfileInfo>
                <MyProfileId>Mun.jongbin</MyProfileId>
                <MyProfileName>문종빈</MyProfileName>
              </MyProfileInfo>
              <ProfileChange>전환</ProfileChange>
            </MyProfileWrap>
          </ProfileWrap>
        </Right>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const BoardWrap = styled.div``;
const UserInfoWrap = styled.div``;
const UserImg = styled.img``;
const UserId = styled.span``;
const OptionMore = styled.img``;
const ContentWrap = styled.div``;
const ImageBox = styled.div``;
const BtnBox = styled.div``;
const CommentWrap = styled.div``;
const Like = styled.span``;
const CommentBox = styled.div``;
const CommentInputBox = styled.div``;
const Emoticon = styled.img``;
const Input = styled.input``;
const SendBtn = styled.button``;

const Right = styled.div`
  width: 293px;
`;

const ProfileWrap = styled.div`
  width: 293px;
  height: 56px;
  border: 1px solid #000;
`;
const MyProfileWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const MyProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
const MyProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
`;
const MyProfileId = styled.span``;
const MyProfileName = styled.span``;
const ProfileChange = styled.button``;

export default Main;
