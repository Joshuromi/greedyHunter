import { ReactComponent as Avatar } from "../../assets/greedy.svg";
import "./box.style.scss";

const Box = ({ children, box, location }) => {
    return (
        <div className="box">
            {location ? (location[0] === box ? <Avatar /> : children) : children}
        </div>
    )
}

export default Box; 