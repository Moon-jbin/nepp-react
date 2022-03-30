import { ReactComponent as IconHome } from "../../assets/images/home.svg";
import { ReactComponent as IconDirect } from "../../assets/images/direct.svg";
import { ReactComponent as IconNewBoard } from "../../assets/images/newBoard.svg";
import { ReactComponent as IconFindPerson } from "../../assets/images/findPerson.svg";
import { ReactComponent as IconActiveFeed } from "../../assets/images/activeFeed.svg";
import { ReactComponent as IconSearch } from "../../assets/images/search.svg";

import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

const PageHeader = () => {
  const [modal, setModal] = useState(false);

  console.log(modal);

  return (
    <>
      {modal && <ModalComponent activeModal={setModal} />}

      <Header>
        <Contents>
          <LogoWrap>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </LogoWrap>
          <InputWrap>
            <InputSearchBox>
              <IconSearch />
            </InputSearchBox>
            <Input placeholder="검색" />
          </InputWrap>
          <Nav>
            <InputBox>
              <Link to="/">
                <IconHome />
              </Link>
            </InputBox>
            <InputBox>
              <IconDirect />
            </InputBox>
            <InputBox>
              <IconNewBoard onClick={() => setModal(true)} />
            </InputBox>
            <InputBox>
              <IconFindPerson />
            </InputBox>
            <InputBox>
              <IconActiveFeed />
            </InputBox>
            <InputBox>
              <Link to="/profile">
                <IconProfile src="https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2" />
              </Link>
            </InputBox>
          </Nav>
        </Contents>
      </Header>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

const Header = styled.header`
  display: block;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
`;
const Contents = styled.div`
  display: flex;
  max-width: 1024px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  margin: 0 auto;
`;
const Logo = styled.img``;
const InputWrap = styled.div`
  margin: 0 auto;
  background: #efefef;
  display: flex;
  border-radius: 5px;
  padding: 5px 10px;
  align-items: center;
  padding: 10px 10px;
`;
const InputSearchBox = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 0 0 10px;
`;

const InputBox = styled.div`
  display: flex;
  padding: 0 0 0 24px;
`;

const Input = styled.input`
  border: 0;
  background: #efefef;
  margin: 0 0 0 10px;
  font-size: 16px;
`;

const Nav = styled.div`
  margin: 0 auto;
  display: flex;
`;
const IconProfile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const OutletWrapper = styled.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 15px 0;
`;

export default PageHeader;
