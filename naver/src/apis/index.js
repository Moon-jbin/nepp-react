import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "HC2v5RaXKKNAhu1IZRav",
    "X-Naver-Client-Secret": "72GmZ4lAiu",
  },
});

export const getMovieList = async (params) => {
  const { data } = await instance.get("/v1/search/movie.json", {
    params: params,
  });

  return data;
};

export const getBookList = async (params) => {
  const { data } = await instance.get("/v1/search/book.json", {
    params: params,
  });

  return data;
};

export const getBookDetaile = async (params) => {
  const { data } = await instance.get("/v1/search/book_adv.json", {
    params: params,
  });

  return data;
};
