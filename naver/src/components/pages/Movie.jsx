import React from "react";
import styled from "styled-components";
import MovieList from "../organisms/MovieList";
import axios from "axios";
import { useState } from "react";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const onSubmitFn = async (e) => {
    e.preventDefault();

    // CORS 처리 해야한다..!!
    const result = await axios.get("/v1/search/movie.json", {
      headers: {
        "X-Naver-Client-Id": "HC2v5RaXKKNAhu1IZRav",
        "X-Naver-Client-Secret": "72GmZ4lAiu",
      },
      params: {
        query: text,
      },
    });

    setMovieList(result.data.items);
  };
  console.log(movieList);
  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={onSubmitFn}>
        <InputText
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
    </Wrapper>
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

export default Movie;
