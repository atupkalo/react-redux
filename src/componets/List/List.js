import "./List.css";
function List(props) {
  return (
    <div className={`item-wrap ${props.itemActiveClass}`}>
      <div className="place">{props.place}</div>
      <div className="date">{props.date}</div>
      <div className="item-btm-wrap">
        <button
          onClick={props.doneHandler}
          className={`item-btn ${props.btnColor}`}
        >
          {props.btnValue}
        </button>
        <button onClick={props.deletHandler} className="item-btn btn-red">
          Delete
        </button>
      </div>
    </div>
  );
}
export default List;
