import "./FilterButtons.css";
function FilterButtons(props) {
  return (
    <>
      <div className="filter-btns">
        <button
          onClick={props.showAll}
          className={props.filter === "all" ? "active-btn" : "btn-all"}
        >
          Show All
        </button>
        <button
          onClick={props.showTop}
          className={props.filter === "top" ? "active-btn" : "btn-top"}
        >
          Top students <i className="fa-solid fa-star"></i>
        </button>
      </div>
    </>
  );
}

export default FilterButtons;
