import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Main,
  Signup,
  Logout,
  Profile,
  ProfileEdit,
} from "./components/pages";
import { PageHeader } from "./components/organisms";
import LoginCheck from "./components/organisms/LoginCheck";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<PageHeader />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Main />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
