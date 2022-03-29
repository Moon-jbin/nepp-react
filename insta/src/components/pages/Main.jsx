import styled from "styled-components";
import { userProfileData } from "../../UserProfileData/userProfileData";
const Main = () => {

  const userProfileList = userProfileData.map((item)=>{
    return(
              <UserProfileWrap>
                <UserProfileImg src={item.img}/>
                <UserProfileInfo>
                  <UserProfileId>{item.id}</UserProfileId>
                  <IsFollow>{item.isFollow}</IsFollow>
                </UserProfileInfo>
                <FollowBtn>{item.btn}</FollowBtn>
              </UserProfileWrap>
    )
  }
  )

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
          <RecommendWrap>
            <RecommendTop>
              <RecommForUser>회원님을 위한 추천</RecommForUser>
              <ViewAll>모두보기</ViewAll>
            </RecommendTop>
            <RecommendBottom>
              <UserProfileWrap>
                <UserProfileImg src=" https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2" />
                <UserProfileInfo>
                  <UserProfileId>mun</UserProfileId>
                  <IsFollow>회원님을 팔로우 합니다.</IsFollow>
                </UserProfileInfo>
                <FollowBtn>팔로우</FollowBtn>
              </UserProfileWrap>
              {userProfileList}
            </RecommendBottom>
          </RecommendWrap>
          <CopyRightForm>
            <CopyRight>
               © 2022 INSTAGRAM FROM META
            </CopyRight>
          </CopyRightForm>
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
  /* border: 1px solid #000; */
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
  flex: 1;
  padding: 0 10px;
`;
const MyProfileId = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const MyProfileName = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;
const ProfileChange = styled.button`
  background: #fff;
  border: 0;
  font-size: 12px;
  font-weight: 600;
  color:#0095f6;
`;

// 회원님을 추천
const RecommendWrap = styled.div`
  margin: 24px 0 0 ;
  width: 100%;
  border: 1px solid #000;
`;
const RecommendTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px 0;
`;
const RecommForUser = styled.span`
  font-size: 14px;
  color: #8e8e8e;
  font-weight: 700;
`;
const ViewAll = styled.span`
  font-size: 13px;
  color: #262626;
  font-weight: 600;
`;

const RecommendBottom = styled.div`
  width: 100%;
`;
const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0 5px 0;
`;
const UserProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const UserProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
`;
const UserProfileId = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const IsFollow = styled.span`
  width: 193px;
  font-size: 12px;
  font-weight: 500;
  color: #8e8e8e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

`;
const FollowBtn = styled.button`
  background: #fff;
  border: 0;
  font-size: 12px;
  font-weight: 600;
  color:#0095f6;
`;

// copyright
const CopyRightForm = styled.div`
  width: 100%;
  padding: 20px 0 0;
`;
const CopyRight = styled.span`
  font-size: 12px;
  color: #c7c7c7;
`;


export default Main;
