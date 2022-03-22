import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;
export const Main = styled.div`
  width: 350px;
  background: #fff;
`;
export const Box = styled.div`
  border: 1px solid #dbdbdb;
  margin: 0 0 10px;
  &:last-child {
    margin: 0;
  }
`;
export const Logo = styled.img`
  display: block;
  margin: 30px auto 40px;
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 50px 0;
`;
export const InputText = styled.input`
  margin: 0 0 10px;
  height: 24px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  padding: 9px 0 7px 8px;
`;
export const BtnSubmit = styled.button`
  height: 35px;
  outline: none;
  background: #0095f6;
  border: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
`;

export const SignupWrapper = styled.div`
  text-align: center;
  margin: 24px auto;
  font-size: 14px;
`;

export const CustomLink = styled(Link)`
  color: #0095f6;
  text-decoration: none;
  font-weight: 600;
`;
