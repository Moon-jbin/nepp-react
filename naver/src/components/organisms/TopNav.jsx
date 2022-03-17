import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../../datas";
const TopNav = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <></>;
  }

  const navList = nav.map((item) => {
    return (
      <Link to={item.location} key={item.id}>
        <Button isActive={item.location === pathname}>{item.name}</Button>
      </Link>
    );
  });

  return (
    <>
      <Container>
        <Nav>{navList}</Nav>
      </Container>
    </>
  );
};

// 현재 주소이면 버튼 색이 바뀜이

//

const Container = styled.header`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;
const Nav = styled.nav``;
const Button = styled.button`
  padding: 10px 15px;
  background: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  color: ${({ isActive }) => isActive && "#fff"};
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
`;

export default TopNav;
