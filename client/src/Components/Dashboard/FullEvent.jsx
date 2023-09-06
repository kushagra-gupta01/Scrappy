import React from 'react'
import CreateEvent from "./CreateEventBtn";
import EventsTab from './EventsTab';

// this is just for displaying in tablet mode
const FullEvent = () => {
  return (
    <div class="h-full">
      <div class="rounded-t-lg bg-gray-900 pb-5">
        <CreateEvent />
      </div>
      <div class="border border-transparent"></div>
      <div class="rounded-b-lg bg-gray-900">
        <EventsTab />
      </div>
    </div>
  );
}

export default FullEvent
