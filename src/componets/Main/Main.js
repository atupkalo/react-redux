import { useSelector, useDispatch } from "react-redux";
import {
  removePlace,
  markVisited,
} from "../../features/places/managePlacesSlice";

import List from "../List/List";
import Form from "../Form/Form";

import "./Main.css";

function Main() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.managePlaces.placesData);

  return (
    <main className="main">
      <Form />
      <div className="list-wrap">
        {places.length < 1 ? (
          <div className="empty">
            You have no listed places to visit, please use the form to add a
            desirable place.
          </div>
        ) : (
          places.map((elem, i) => {
            return (
              <List
                itemActiveClass={elem.isVisited ? "item-wrap-active" : ""}
                btnValue={elem.isVisited ? "Undo" : "Done"}
                btnColor={elem.isVisited ? "btn-yellow" : "btn-green"}
                deletHandler={() => dispatch(removePlace(i))}
                doneHandler={() => dispatch(markVisited(i))}
                place={elem.place}
                date={elem.date}
                key={i}
              />
            );
          })
        )}
      </div>
    </main>
  );
}
export default Main;
