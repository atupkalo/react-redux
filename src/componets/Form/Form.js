import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPlace } from "../../features/places/managePlacesSlice";

import "./Form.css";
function Form() {
  const dispatch = useDispatch();
  const place = useRef(null);
  const date = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(
      addPlace({
        place: place.current.value,
        date: date.current.value,
        isVisited: false,
      })
    );
    place.current.value = "";
    date.current.value = "";
  }
  return (
    <div className="form-wrap">
      <form action="#" id="places-form" className="form">
        <input ref={place} type="text" className="form-input" />
        <input ref={date} type="date" className="form-input" />
        <input
          onClick={submitHandler}
          type="submit"
          value="SUBMIT"
          className="form-input-btn"
        />
      </form>
    </div>
  );
}

export default Form;
