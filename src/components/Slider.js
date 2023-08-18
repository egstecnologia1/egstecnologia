import { Fragment } from "react";
import CarBrandsSlide from "./CarBrandsSlide";
import { sportCarsArray, electricCarsArray } from "../data";
import useSliderAminated from "../hooks/useSliderAminated";
import SliderNav from "./SliderNav";

const Slider = () => {
  const {
    sportListClassName,
    elecListClassName,
    clickedSportCars,
    handleClickAction,
    clickedElectricCars,
  } = useSliderAminated();
  return (
    <Fragment>
      <div id="slider" className="slider">
        <ul id="ListSport" className={`badgesList  ${sportListClassName}`} style={{verticalAlign: 'text-top'}}>
          <li>
          <CarBrandsSlide dataArray={sportCarsArray} />
          </li>
        </ul>
        {/* <ul id="ListElectric" className={`badgesList ${elecListClassName}`}>
          <CarBrandsSlide dataArray={electricCarsArray} />
        </ul> */}
        {/* <SliderNav
          clickedSportCars={clickedSportCars}
          handleClickAction={handleClickAction}
          clickedElectricCars={clickedElectricCars}
        /> */}
      </div>
    </Fragment>
  );
};

export default Slider;
