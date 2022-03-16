import React, { useEffect } from "react";
import styled from "styled-components";
import MovieList from "../organisms/MovieList";
import { getMovieList } from "../../apis";
import { useState } from "react";
import { countryList } from "../../datas";
import { genreList } from "../../datas";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [genre, setGenre] = useState("ALL");

  useEffect(() => {
    searchMovieList();
  }, [country, genre]);

  const onSubmitFn = async (e) => {
    e.preventDefault();
    // CORS 처리 해야한다..!!
    // const params = {query:text, country};
    // if(country==="ALL")delete params.country;
    searchMovieList();
  };

  const searchMovieList = async () => {
    if (text === "") return;

    const params = { query: text };
    if (country !== "ALL") params.country = country;
    if (genre !== "ALL") params.genre = genre;

    const { items } = await getMovieList(params);
    setMovieList(items);
  };
  // console.log(movieList);

  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={onSubmitFn}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="ALL">전체</option>
          {/* 국가 언어 선택 */}
          {countryList.map((item) => {
            return (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="ALL">전체</option>
          {genreList.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
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
