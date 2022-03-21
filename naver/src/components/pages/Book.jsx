import styled from "styled-components";
import BookList from "../organisms/BookList";
import { getBookList } from "../../apis/index";
import { useEffect, useState } from "react";
import Pagination from "../organisms/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

const Book = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const reset = () => {
      setText("");
      setQuery("");
      setPage(1);
      setTotal(0);
      setBookList([]);
    };

    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
      if (page) setPage(parseInt(page));
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    searchBookList();
  }, [page, query]);

  const onSubmitFn = async (e) => {
    e.preventDefault();

    setPage(1);
    setQuery(text);
  };

  const searchBookList = async () => {
    if (query === "") return;

    const start = 10 * page - 9;
    const { items, total } = await getBookList({ query: query, start });

    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query: query, page: page });

    navigate({ search: search });
  };

  return (
    <>
      <Wrapper>
        <PageTitle>Book</PageTitle>
        <Form onSubmit={onSubmitFn}>
          <InputText
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
          />
          <BtnSubmit>검색</BtnSubmit>
        </Form>
        <BookList data={bookList} />
        <Pagination
          nowPage={page}
          total={total}
          onPageChange={(page) => setPage(page)}
        />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;
const PageTitle = styled.h2``;
const Form = styled.form`
  display: flex;
  padding: 15px;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 15px;
`;
const BtnSubmit = styled.button``;
export default Book;
