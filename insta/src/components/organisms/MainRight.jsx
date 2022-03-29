import styled from "styled-components";
import { userProfileData } from "../../UserProfileData/userProfileData";

const MainRight = () => {
  const userProfileList = userProfileData.map((item) => {
    return (
      <UserProfileWrap key={item.idx}>
        <UserProfileImg src={item.img} />
        <UserProfileInfo>
          <UserProfileId>{item.id}</UserProfileId>
          <IsFollow>{item.isFollow}</IsFollow>
        </UserProfileInfo>
        <FollowBtn>{item.btn}</FollowBtn>
      </UserProfileWrap>
    );
  });

  return (
    <>
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
          <RecommendBottom>{userProfileList}</RecommendBottom>
        </RecommendWrap>
        <CopyRightForm>
          <CopyRight>© 2022 INSTAGRAM FROM META</CopyRight>
        </CopyRightForm>
      </Right>
    </>
  );
};

const Right = styled.div`
  width: 293px;
  position: sticky;
  top: 80px;
  height: 700px;
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
  color: #0095f6;
`;

// 회원님을 추천
const RecommendWrap = styled.div`
  margin: 24px 0 0;
  width: 100%;
  /* border: 1px solid #000; */
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
  color: #0095f6;
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

export default MainRight;
