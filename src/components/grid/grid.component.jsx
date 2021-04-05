import "./grid.style.scss";
import { ReactComponent as Food } from "../../assets/food.svg";
import { ReactComponent as Monster } from "../../assets/food.svg";
const Grid = ({ value, monster }) => (
  <div className="grid">
    {value && <Food />}
    {monster && <Monster className="monster" />}
  </div>
);

export default Grid;
