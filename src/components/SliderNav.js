const SliderNav = (props) => {
  const { clickedSportCars, handleClickAction, clickedElectricCars } = props;
  return (
    <nav>
      <span
        className={clickedSportCars ? "selected" : ""}
        onClick={handleClickAction}
      >
        Sport cars
      </span>
      <span
        className={clickedElectricCars ? "selected" : ""}
        onClick={handleClickAction}
      >
        Electric cars
      </span>
    </nav>
  );
};

export default SliderNav;
