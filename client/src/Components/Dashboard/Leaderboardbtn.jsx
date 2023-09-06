import React from "react";
import "../../CSS/scanner.css";
import { Link } from "react-router-dom";
const Scanner = () => {
  return (
    <div>
      <div class="button-borders">
        <Link to="/leaderboard"><button class="primary-button">LEADERBOARD</button></Link>
      </div>
    </div>
  );
};

export default Scanner;
