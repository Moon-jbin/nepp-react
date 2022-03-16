import styled from "styled-components";
import BookList from "../organisms/BookList";
import { getBookList } from "../../apis/index";
import { useState } from "react";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);

  const onSubmitFn = async (e) => {
    e.preventDefault();

    const { items } = await getBookList({ query: text });

    setBookList(items);
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