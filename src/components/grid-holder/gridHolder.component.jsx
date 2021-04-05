import React from "react";
import Box from "../box/box.component";
import { ReactComponent as Food } from "../../assets/food.svg";
import "./gridHolder.style.scss";

const GridHolder = ({ grid, totalGrid }) => {
    const square = (grid * 50) + 6;
    const foodLocation = [];

    while (foodLocation.length <= grid) {
        let food = Math.floor(Math.random() * totalGrid) + 1;
        if (foodLocation.indexOf(food) === -1) foodLocation.push(food);
    }

    return (
        <div className="grid-box" style={{ width: `${square}px` }}>
            {
                Array.from(Array(totalGrid), (i, e) => (
                    foodLocation.indexOf(e) === -1 ? <Box key={e}></Box> : <Box key={e} box={e} location={foodLocation}><Food /></Box>
                ))
            }
        </div>
    )
}

export default GridHolder;