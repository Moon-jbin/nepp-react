import "./App.css";
import Info from "./components/Info";
import { useState } from "react";
const App = () => {
  const [showInfo, setShowInfo] = useState(true);

  // const onClick = (e) => {
  //   return setShowInfo(e);
  // };

  // const InfoFn = () => {
  //   return showInfo === true && <Info />;
  // };

  return (
    <>
      <button onClick={() => setShowInfo(true)}>나오기</button>
      <button onClick={() => setShowInfo(false)}>제거하기</button>
      {showInfo && <Info />}
    </>
  );
};

export default App;
