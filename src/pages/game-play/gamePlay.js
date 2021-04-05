import { connect } from "react-redux";
import GridHolder from "../../components/grid-holder/gridHolder.component";
import { ReactComponent as Life } from "../../assets/life.svg";
import "./gamePlay.style.scss";

const GamePlay = ({ gridType: { grid, gridSize, maxMove, totalGrid } }) => (
    <div className="game-play">
        <div className="game-board">
            <div className="top-info">
                <p>Grid: <span>{gridSize}</span></p>
                <Life />
                <p>Time spent: <span>00:48 secs</span></p>
            </div>
            <div className="game-grids">
                <GridHolder totalGrid={totalGrid} grid={grid} />
            </div>
            <div className="bottom-info">
                <p>Maximum moves: <span>{maxMove}</span></p>
                <p>Total moves: <span>12</span></p>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    gridType: state.grid.gridType
})

export default connect(mapStateToProps)(GamePlay);