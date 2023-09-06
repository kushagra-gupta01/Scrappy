import React, { useEffect, useState } from "react";
import "./Leaderboard";

export default function Table() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    async function leaderboardPoints() {
      const response = await fetch("/api/leaderboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setBoard(data);
        console.log(data);
      } else {
        const data = await response.json();
        alert(data.error);
      }
    }

    leaderboardPoints();
  }, []);

  return (
    <div id="profile" className="flex justify-center items-center">
      {board ? <Items data={board} /> : <p>Loading...</p>}
    </div>
  );
}

function Items({ data }) {
  return (
    <table className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700">
            Name
          </th>
          <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700">
            Location
          </th>
          <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700">
            Points
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{value.username}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{value.location}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{value.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

