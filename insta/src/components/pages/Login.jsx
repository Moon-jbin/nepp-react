import { useState, useContext } from "react";
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
import { postLoginToken } from "../../apis/user";
import instance from "../../apis";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user";

const Login = () => {
  const { setIsLogin } = useContext(UserContext);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_name: "",
    password: "",
  });

  const onChangeFn = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(newForm);
  };

  const onSubmitFn = async (e) => {
    e.preventDefault();

    const { message, success, token } = await postLoginToken(form);
    if (!success) {
      return alert(message);
    }

    console.log(token);
    alert("성공");
    instance.defaults.headers.common["authorization"] = token;
    localStorage.token = token;
    setIsLogin(true);
    navigate("/");
  };

  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <Form onSubmit={onSubmitFn}>
              <InputText
                onChange={onChangeFn}
                name="user_name"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <InputText
                onChange={onChangeFn}
                name="password"
                type="password"
                placeholder="비밀번호"
              />
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
