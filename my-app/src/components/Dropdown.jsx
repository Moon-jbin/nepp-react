import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
const Dropdown = () => {
  const [showList, setShowList] = useState(false);
  const btnEl = useRef();

  useEffect(() => {
    const onClick = (e) => {
      if (!btnEl.current.contains(e.target)) setShowList(false);
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  const onClickFn = (e) => {
    setShowList(!showList);
  };

  return (
    <Wrapper ref={btnEl}>
      <Button onClick={onClickFn}>DropDown</Button>
      <List showList={showList}>
        <Item>Item #1</Item>
        <Item>Item #2</Item>
        <Item>Item #3</Item>
        <Item>Item #4</Item>
      </List>
    </Wrapper>
  );
};

// Item 태그를 제외한 나머지 부분을 누르면 사라지게 한다.
// 내가 클릭한 구간이 Item 구간이 아닌 다른 구간이면 사라지게 한다.

const Wrapper = styled.div`
  position: relative;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
  position: absolute;
  display: ${({ showList }) => (showList ? "block" : "none")};
`;
const Button = styled.button``;

const Item = styled.li`
  padding: 5px 15px;
  & + & {
    border-top: 1px solid #ddd;
  }
  &:hover {
    background: #ddd;
  }
`;

export default Dropdown;
