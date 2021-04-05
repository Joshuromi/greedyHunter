import GameInfo from "../../components/game-info/gameInfo.component";

import { ReactComponent as Mesh } from "../../assets/mesh.svg";
import "./gameStart.style.scss";

const GameStart = () => (
    <div className="game-start">
        <Mesh />
        <div className="game-details">
            <GameInfo />
        </div>
        <Mesh />

    </div>
)

export default GameStart;