import styled from "styled-components";
const Pagination = ({ onPageChange, total, nowPage }) => {
  // total    = 1 10  11  20  21 30  91  100  101  110
  // lastPage = 1  1   2   2   3  3  10   10   11   11

  const lastpage = Math.ceil(total / 10);

  const pageList = [];
  for (let i = 1; i <= lastpage; i++) {
    pageList.push(i);
  }

  return (
    <>
      <List>
        {nowPage !== 1 && (
          <Page onClick={() => onPageChange(nowPage - 1)}>{"<"}</Page>
        )}
        {pageList.map((page) => (
          <Page
            isActive={nowPage === page}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Page>
        ))}
        {nowPage !== lastpage && (
          <Page onClick={() => onPageChange(nowPage + 1)}>{">"}</Page>
        )}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
`;
const Page = styled.button`
  margin: 0 5px 10px 0;
  background: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  color: ${({ isActive }) => isActive && "#fff"};
  outline: none;
  border: none;
  border-radius: 50%;
`;

export default Pagination;
