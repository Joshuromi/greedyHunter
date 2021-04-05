import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as Character } from "../../assets/greedy.svg";
import { connect } from "react-redux";
import { setGridType } from "../../redux/grid-type/gridType.action";
import "./gameInfo.style.scss";

class GameInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: 5
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { grid } = this.state;
        const { setGridType } = this.props;
        const { history } = this.props;

        setGridType({
            grid: grid,
            gridSize: `${grid} x ${grid}`,
            maxMove: Math.floor((grid * grid) / 2),
            totalGrid: grid * grid
        });

        history.push("/gameplay");
    }

    handleChange = (event) => {
        this.setState({ grid: event.target.value })
    }

    render() {
        const { grid } = this.state;
        return (
            <div className="game-info">
                <div className="heading">
                    <Character />
                    <h1 className="heading-text">Greedy Hunter</h1>
                    <p className="details">
                        The aim is to eat all the food in record time<br />
                        Confiure your game grid below 👇🏼
                    </p>
                </div>
                <div className="game-action">
                    <form onSubmit={this.handleSubmit} >
                        <div className="input-div">
                            <label>Game grid</label>
                            <input type="number" name="grid" value={grid} onChange={this.handleChange} min="5" max="12" />
                        </div>
                        <button>Start game</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setGridType: (gridType) => dispatch(setGridType(gridType))
})

export default connect(null, mapDispatchToProps)(withRouter(GameInfo));
