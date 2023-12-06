import React from "react";
import Table from "./table";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function Leaderboard() {
const navigate = useNavigate();
  return (
    <div className="leaderBoard_container">
      <div className=" w-full pl-8 pt-6">
        <div class="mb-[-30px]">
          <button
            onClick={() => {
              navigate("/");
            }}
            data-text="Awesome"
            class="button"
          >
            <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;Scrappy&nbsp;
            </span>
          </button>
        </div>
      </div>
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