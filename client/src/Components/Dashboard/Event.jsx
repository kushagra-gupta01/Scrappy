import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    async function fetchEventDetails() {
      const res = await fetch('/api/eventscreated', {
        method: 'GET',
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setEvents(data.data);
        setIsDataFetched(true);
      } else {
        alert(data.error);
      }
    }

    if (!isDataFetched) {
      fetchEventDetails();
    }
  }, []);

  return (
    <div>
      {isDataFetched ? (
        <Event events={events} />
      ) : (
        <p className="text-xl font-mono font-bold text-white">
          loading...
        </p>
      )}
    </div>
  );
};

const Event = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h5 className="mb-2 min-w-max mt-4 text-xl font-bold tracking-tight  text-white">
            {event.title}
          </h5>
          <p className="font-normal text-sm mb-5  text-gray-400">
            {event.description}
          </p>
          <h5 className="mb-2 mt-4 text-lg font-normal tracking-tight  text-white">
            Location
          </h5>
          <h5 className="font-normal text-sm mb-5  text-gray-400">
            {event.location}
          </h5>
          <h5 className="mb-2 mt-4 text-lg font-normal tracking-tight  text-white">
            {event.date}
          </h5>
          <h5 className="font-normal text-sm mb-5  text-gray-400">
            {event.time}
          </h5>
          <div className="border-dashed border-2 border-sky-500 border-y-2"></div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

