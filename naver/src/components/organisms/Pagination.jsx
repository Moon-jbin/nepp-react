import styled from "styled-components";
const Pagination = ({ onPageChange, total, nowPage }) => {
  // total    = 1 10  11  20  21 30  91  100  101  110
  // lastPage = 1  1   2   2   3  3  10   10   11   11

  // nowPage   =  1  10  11 20 21 100 101
  // startPage =  1   1  11 11 21 91  101
  // endPage   =  10 10  20 20 30 100 110

  // endPage 는 2가지 경우가 있다.
  // startPage, lastPage

  const lastpage = Math.ceil(total / 10);

  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endpage = startPage + 9 > lastpage ? lastpage : startPage + 9;

  const pageList = [];
  for (let i = startPage; i <= endpage; i++) {
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
