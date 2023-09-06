import React from "react";
import Event from "./Event"

const EventsTab = () => {
  return (
    <div>
      <div className="overflow-y-scroll max-h-96 min-w-max md:max-h-[22.5rem] lg:max-h-[36.5rem] block p-6 rounded-lg bg-gray-900 ">
        <h1 className="mb-2 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl lg:mr-28">
          Upcoming Events
        </h1>
        <div>
          <Event />
        </div>
      </div>
    </div>
  );
};

export default EventsTab;

