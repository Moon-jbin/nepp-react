import styled from "styled-components";

const Flex = () => {
  return (
    <>
      <Container>
        <Box width="250" height="100" />
        <Box />
        <Box width="100" height="100" />
        <Box width="100" height="250" />
      </Container>
      <Grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </>
  );
};

const Container = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: ${(props) => props.width || 200}px;
  height: ${(props) => props.height || 200}px;
  margin: 0 0 10px 10px;
  background: #000;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;
const Item = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
`;
export default Flex;
