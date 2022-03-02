import styled from "styled-components";
import { useState } from "react";
const TodoComponent = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    { id: 1, content: "할일1" },
    { id: 2, content: "할일2" },
    { id: 3, content: "할일3" },
  ]);
  const [listId, setListId] = useState(4);
  const [checked, setChecked] = useState(false);

  const onSubmitFn = (e) => {
    e.preventDefault();
  };

  const onChangeFn = (e) => {
    return setInput(e.target.value);
  };

  const onChangeChkFn = (e) => {
    console.log(e.target.checked);
    return setChecked(e.target.checked);
  };

  const onClickAddFn = (e) => {
    if (input === "") {
      return;
    }
    const listWrap = [...list, { id: listId, content: input }];
    console.log(listWrap);

    setListId((prev) => {
      return prev + 1;
    });
    setList(listWrap);
    setInput("");
  };
  const onClickDeleteFn = (id) => {
    const listWrap = list.filter((item) => {
      return item.id !== id;
    });

    setList(listWrap);
  };

  const newList = list.map((item) => {
    return (
      <Item key={item.id}>
        <label style={{ display: "flex" }}>
          <Checkbox type="checkbox" onChange={onChangeChkFn} />
          <Content>{item.content}</Content>
        </label>
        <BtnDelete onClick={() => onClickDeleteFn(item.id)}>-</BtnDelete>
      </Item>
    );
  });

  return (
    <>
      <Container>
        <Title>일정관리</Title>
        <form onSubmit={onSubmitFn}>
          <InputWrapper>
            <InputText
              placeholder="할 일을 입력하세요"
              value={input}
              onChange={onChangeFn}
            />
            <BtnSubmit onClick={onClickAddFn}>+</BtnSubmit>
          </InputWrapper>
        </form>
        <List>{newList}</List>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 500px;
  margin: 100px auto 0 auto;
  background: #fff;
  padding: 0 0 50px;
`;
const Title = styled.div`
  background: #3193d4;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-weight: 600;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const InputText = styled.input`
  width: 450px;
  height: 30px;
  background: #000;
  &::placeholder {
    color: #ccc;
  }
  border: 0;
  outline: none;
  color: #fff;
`;
const BtnSubmit = styled.button`
  width: 50px;
  background: #696767;
  color: #fff;
  font-size: 20px;
  border: 0;
  outline: none;
`;
const List = styled.ul`
  margin: 0 0 100px 0;
  list-style: none;
  padding-left: 0;
  width: 100%;
`;
const Item = styled.li`
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
`;
const Checkbox = styled.input`
  &[type="checkbox"] {
    border: 2px solid #000;
  }
  margin: auto auto auto 20px;
`;
const Content = styled.span`
  margin: auto auto auto 10px;
  /* background: red; */
  width: 430px;
  height: 100%;
`;
const BtnDelete = styled.button`
  border-radius: 50%;
  border: 3px solid red;
  color: red;
  cursor: pointer;
  font-weight: 600;
  background: #fff;
  margin: auto 10px auto auto;
`;

export default TodoComponent;
