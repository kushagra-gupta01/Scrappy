import React, { useState, useEffect } from "react";

const Stats = () => {
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    async function fetchPoints() {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("/api/points", {
          method: "POST",
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ points: 0 }),
        });

        if (response.ok) {
          const data = await response.json();
          const { points } = data;

          setTotalPoints(points);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchPoints();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto rounded-lg md:w-80">
        <table className="w-full text-sm text-left text-gray-400 lg:max-w-3xl">
          <caption className="p-5 md:pb-10 text-left bg-gray-900 font-sans font-bold tracking-tight text-3xl text-white md:text-4xl sm:leading-none">
            Contributions
            <p className="text-sm font-normal text-gray-400 mt-2">
              Track your contributions to see the impact you've had on the
              environment by actively collecting and disposing of garbage.
            </p>
          </caption>
          <thead className="text-xs text-white uppercase bg-gray-900"></thead>
          <div className="border border-transparent" />
          <tbody>
            <tr className="bg-slate-900">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                Total Points
              </th>
              <td className="px-6 py-4 font-extrabold">{totalPoints}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
