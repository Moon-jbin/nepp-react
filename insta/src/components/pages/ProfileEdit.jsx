import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getMyInfo, patchMyProfileImage } from "../../apis/user";
import { uploadImage } from "../../apis/upload";

const ProfileEdit = () => {
  const [form, setForm] = useState({});
  const fileEl = useRef(null);
  const { memo, profile_image, name, user_name } = form;

  useEffect(() => {
    refreshInfo();
  }, []);

  const refreshInfo = async () => {
    const result = await getMyInfo();
    setForm(result.user);
  };

  const onChangeFileFn = async (e) => {
    const file = e.target.files[0];
    const profile_image = await uploadImage(file);
    await patchMyProfileImage({ profile_image });
    refreshInfo();
  };

  return (
    <>
      <Container>
        <NameWrap>
          <Name>이름</Name>
          <InputName value={name} />
        </NameWrap>
        <IntroWrap>
          <IntroTitle>소개</IntroTitle>
          <Textarea value={memo} />
        </IntroWrap>
        <UserNameWrap>
          <UserName>사용자 이름</UserName>
          <UserNameInput value={user_name} />
        </UserNameWrap>
        <ProfileImageWrap>
          <ProfileImage src={profile_image} />
          <ProfileWrap>
            <ProfileName>mun.jongbin</ProfileName>
            <ProfileChangeBtn onClick={() => fileEl.current.click()}>
              프로필 사진 바꾸기
            </ProfileChangeBtn>
            <input
              ref={fileEl}
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={onChangeFileFn}
            />
          </ProfileWrap>
        </ProfileImageWrap>
        <SubmitBtn>제출</SubmitBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid #ccc;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
`;

const NameWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
`;
const Name = styled.span`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;
const InputName = styled.input`
  margin: 0 0 0 30px;
  height: 30px;
  padding: 0 10px;
  flex: 1;
  max-width: 355px;
`;

const IntroWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
`;
const IntroTitle = styled.span`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;
const Textarea = styled.textarea`
  margin: 0 0 0 30px;
  padding: 0 10px;
  height: 60px;
  flex: 1;
  max-width: 355px;
`;

const UserNameWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
`;
const UserName = styled.span`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;
const UserNameInput = styled.input`
  padding: 0 10px;
  margin: 0 0 0 30px;
  flex: 1;
  max-width: 355px;
  height: 30px;
`;

const ProfileImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
`;
const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #777;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  padding: 1px 6px;
`;

const ProfileChangeBtn = styled.button`
  background: #fff;
  border: none;
  color: #0095f6;
  font-weight: 600;
  cursor: pointer;
`;
const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 30px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #0095f6;
  border: none;
  border-radius: 5px;
`;

export default ProfileEdit;
