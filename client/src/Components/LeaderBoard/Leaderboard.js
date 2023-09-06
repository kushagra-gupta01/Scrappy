import React from "react";
import Table from "./table";
import "./styles.css";
export default function Leaderboard() {

  return (
    <div className="leaderBoard_container">
      <div className="board">
        <h1 className="leaderboard">Leaderboard</h1>

        <div className="duration">
          <div className="radio-inputs">
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="name">Today</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" />
              <span className="name">Monthly</span>
            </label>

            <label className="radio">
              <input type="radio" name="radio" />
              <span className="name">All-Time</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}