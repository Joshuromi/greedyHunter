import React from "react";
import Box from "../box/box.component";
import { ReactComponent as Food } from "../../assets/food.svg";
import "./gridHolder.style.scss";

class GridHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodLocation: []
        }
    }

    componentDidMount() {
        const { grid, totalGrid } = this.props;
        // const allDiv = [...document.getElementsByClassName("box")];
        const foodLocation = [];

        while (foodLocation.length < grid) {
            let food = Math.floor(Math.random() * totalGrid) + 1;
            if (foodLocation.indexOf(food) === -1) foodLocation.push(food);
        }

        this.setState({ foodLocation: foodLocation });
    }

    render() {
        const { foodLocation } = this.state;
        const { grid, totalGrid } = this.props;
        const square = (grid * 50) + 6;

        return (
            <div className="grid-box" style={{ width: `${square}px` }}>
                {
                    Array.from(Array(totalGrid), (i, e) => (
                        foodLocation.indexOf(e) === -1 ? <Box key={e}></Box> : <Box key={e}><Food /></Box>
                    ))
                }
            </div>
        )
    }
}

export default GridHolder;