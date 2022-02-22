const ChildrenComponent = ({ setTxtFn }) => {
  const onClickFn = () => {
    setTxtFn("in children");
  };

  return <button onClick={onClickFn}>children 클릭</button>;
};

export default ChildrenComponent;
