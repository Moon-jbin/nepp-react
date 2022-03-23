import { useState } from "react";
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
import { postUser } from "../../apis/user";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    user_name: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, user_name, password, passwordConfirm } = form;

  const onChangeFn = (e) => {
    const newform = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(newform);
  };

  const onSubmitFn = async (e) => {
    e.preventDefault();
    console.log(form.name.length);
    if (form.user_name.length <= 4) {
      return alert("아이디를 4글자 이상 입력해주세요");
    } else if (form.password !== form.passwordConfirm) {
      return alert("비밀번호를 확인해주세요.");
    }

    const { success, message } = await postUser(form);

    if (success) {
      alert("가입성공");
      navigate({ pathname: "/login" });
    } else {
      alert(message);
    }
  };

  return (
    <>
      <PageWrapper>
        <Main>
          <Box>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <Welcome>친구들의 사진과 동영상을 보려면 가입하세요</Welcome>
            <BtnSubmit>Facebook으로 로그인</BtnSubmit>
            <Form onSubmit={onSubmitFn}>
              <InputText
                placeholder="성명"
                name="name"
                onChange={onChangeFn}
                value={name}
                required
              />
              <InputText
                placeholder="사용자 이름"
                name="user_name"
                onChange={onChangeFn}
                value={user_name}
                required
              />
              <InputText
                type="password"
                placeholder="비밀번호"
                name="password"
                onChange={onChangeFn}
                value={password}
                required
              />
              <InputText
                type="password"
                placeholder="비밀번호 확인"
                name="passwordConfirm"
                onChange={onChangeFn}
                value={passwordConfirm}
                required
              />
              <BtnSubmit>가입</BtnSubmit>
            </Form>
          </Box>
          <Box>
            <SignupWrapper>
              계정이 있으신가요 <CustomLink to="/login">로그인</CustomLink>
            </SignupWrapper>
          </Box>
        </Main>
      </PageWrapper>
    </>
  );
};

const Welcome = styled.div`
  display: flex;
`;

export default Signup;
