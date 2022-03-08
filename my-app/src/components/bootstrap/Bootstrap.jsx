import Accordion from "./Accordion";
import { accordionData } from "../../datas/bootstrap";
import Dropdown from "../Dropdown";
const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
    </>
  );
};

export default Bootstrap;
