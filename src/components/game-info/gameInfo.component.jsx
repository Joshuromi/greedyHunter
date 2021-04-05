import React from "react";
import { ReactComponent as Character } from "../../assets/greedy.svg";
import "./gameInfo.style.scss";

const GameInfo = () => (
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
            <form >
                <div className="input-div">
                    <label>Game grid</label>
                    <input type="number" name="grid" min="5" max="12" />
                </div>
                <button>Start game</button>
            </form>
        </div>
    </div>
);

export default GameInfo;
