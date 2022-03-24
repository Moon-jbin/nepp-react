import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user";

const Main = () => {
  const { isLogin } = useContext(UserContext);

  console.log(isLogin);

  return (
    <>
      {isLogin ? "로그인 됨" : "로그인 안됨"}
      <Link to="/login">로그인</Link>
      <Link to="/logout">로그아웃</Link>
    </>
  );
};

export default Main;
