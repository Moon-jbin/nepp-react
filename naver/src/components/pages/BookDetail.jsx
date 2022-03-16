import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetaile } from "../../apis";
import styled from "styled-components";
const BookDetail = () => {
  const [book, setBook] = useState({});

  const { isbn } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getBookDetaile({ d_isbn: isbn });
      setBook(result.items[0]);
    })();
  }, []);

  return (
    <>
      <Thumbnail src={book.image} />
      <Title>{book.title}</Title>
    </>
  );
};

const Thumbnail = styled.img`
  width: 50%;
`;
const Title = styled.div``;

export default BookDetail;
