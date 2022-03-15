import styled from "styled-components";
const MovieList = ({ data }) => {
  const movieItems = data.map((item, index) => {
    return (
      <Item key={index}>
        <Thumbnail src={item.image} />
        <Title
          dangerouslySetInnerHTML={{
            __html: item.title,
          }}
        />
        <Subtitle>{item.subtitle}</Subtitle>
      </Item>
    );
  });

  return (
    <>
      <List>{movieItems}</List>
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

export default MovieList;
