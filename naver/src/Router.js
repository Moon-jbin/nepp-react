import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Book from "./components/pages/Book";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
