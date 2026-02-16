function FilterButtons(props) {
  // console.log(props.showAll);
  return (
    <>
      <div className="filter-btns">
        <button onClick={props.showAll}>Show All</button>
        <button onClick={props.showTop}>Top students</button>
      </div>
    </>
  );
}

export default FilterButtons;
