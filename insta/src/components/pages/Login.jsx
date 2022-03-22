import styled from "styled-components";
import {
  PageWrapper,
  Main,
  Box,
  Logo,
  BtnSubmit,
  Form,
  InputText,
  SignupWrapper,
  CustomLink,
} from "../atoms/login";

const Login = () => {
  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <Form>
              <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
              <InputText type="password" placeholder="비밀번호" />
              <BtnSubmit>로그인</BtnSubmit>
            </Form>
            <FBLogin>Facebook으로 로그인</FBLogin>
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 없으신가요 <CustomLink to="/signup">가입하기</CustomLink>
            </SignupWrapper>
          </Box>
        </Main>
      </PageWrapper>
    </>
  );
};

const FBLogin = styled.div`
  text-align: center;
  color: #385185;
  margin: 18px auto;
  cursor: pointer;
`;
const ForgotPassword = styled.div`
  text-align: center;
  margin: 20px auto;
  font-size: 12px;
  cursor: pointer;
`;

export default Login;
