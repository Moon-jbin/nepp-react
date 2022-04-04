import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/user";
import { useNavigate } from "react-router-dom";

const LoginCheck = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <>
      { isLogin && <Outlet /> }
    </>
  );
};

export default LoginCheck;
