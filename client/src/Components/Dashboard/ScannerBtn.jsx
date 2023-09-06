import React, { useState, useEffect } from 'react';
import "../../CSS/scanner.css";
import Stats from "./Stats"

const Scanner = () => {
  const [boxes, setBoxes] = useState([]);
  const [points, setPoints] = useState(0);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('image_file', file);

    const response = await fetch('http://54.66.167.78:4000/detect', {
      method: 'POST',
      body: data,
    });

    const boxesData = await response.json();
    setBoxes(boxesData);
    console.log(boxesData);

    const elements = ["Glass", "Metal", "Paper", "Plastic", "Battery", "Biological", "Trash"];
    const elementPoints = [10, 20, 5, 15, 25, 8, 12];

    let totalPoints = points; 
      const index = elements.indexOf(boxesData[0]);
      if (index !== -1) {
        totalPoints += elementPoints[index];
      }
    setPoints(totalPoints);
    console.log(points);
    
  };


  useEffect(() => {
    async function pointsUpdate() {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:1337/api/points', {
          method: 'POST',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ points: points }),
        });
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    }
    pointsUpdate();
  }, [points]);


  return (
    <div>
      <div className="button-borders mt-3">
        <label htmlFor="fileInput" className="primary-button">
          UPLOAD POINTS: {points}
          <input id="fileInput" type="file" onChange={handleUpload} style={{ display: "none" }} />
        </label>
        </div>
        <div>
        <div class="button-borders mt-7">
        <button class="primary-button">{boxes.map((box, index) => (
            <li class="points" key={index}>{box}</li>
          ))}</button>
      </div>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

export default Scanner;