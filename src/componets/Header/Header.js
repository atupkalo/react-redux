import { useSelector } from "react-redux";
import "./Header.css";
function Header() {
  const placesData = useSelector((state) => state.managePlaces.placesData);
  let toGo = 0;
  let visited = 0;

  for (let i = 0; i < placesData.length; i++) {
    if (placesData[i].isVisited) {
      visited += 1;
    } else {
      toGo += 1;
    }
  }

  return (
    <header className="header">
      <div className="header-title">Go places bucket list</div>
      <div className="header-display">
        <div className="display">
          <span className="display-span">Places visited</span>
          {visited}
        </div>
        <div className="display">
          <span className="display-span">Place to go</span>
          {toGo}
        </div>
      </div>
    </header>
  );
}
export default Header;
