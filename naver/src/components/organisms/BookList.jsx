import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  const bookList = data.map((item, idx) => {
    return (
      <Link to={`/book/${item.isbn.split(" ")[1]}`} key={item.image}>
        <Item key={idx}>
          <Thumbnail src={item.image} />
          <Title
            dangerouslySetInnerHTML={{
              __html: item.title,
            }}
          />
          <Subtitle>{item.subtitle}</Subtitle>
        </Item>
      </Link>
    );
  });

  return (
    <>
      <List>{bookList}</List>
    </>
  );
};
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.span``;
const Subtitle = styled.div``;
export default BookList;
