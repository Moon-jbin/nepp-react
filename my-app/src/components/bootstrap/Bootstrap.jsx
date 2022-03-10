import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "../Dropdown";
import Carousel from "../Carousel";
const Bootstrap = () => {
  return (
    <>
      <Accordion data={accordionData} />
      <Dropdown />
      <Carousel data={carouselData} />
    </>
  );
};

export default Bootstrap;
