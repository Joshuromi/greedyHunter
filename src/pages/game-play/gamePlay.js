
import { ReactComponent as Background } from "../../assets/background.png";
import Grids from "../../components/grid-cards/grid-cards.component";
import { ReactComponent as Life } from "../../assets/life.svg";
import "./gamePlay.style.scss";

const GamePlay = () => (
    <div className="game-play">
        <div className="board">
            <div className="top">
                <p>Grid 10 x 10</p>
                <Life />
                <p>Time Spent: 00:48s</p>
            </div>
            <Grids grid={10} />
            <div className="bottom">
                <p>Maximum moves: 100</p>
                <p>Total moves: 12</p>
            </div>
        </div>
    </div>
)

export default GamePlay;