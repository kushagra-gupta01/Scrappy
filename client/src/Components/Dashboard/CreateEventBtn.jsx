import React from 'react'
import { useNavigate } from 'react-router-dom';
const CreateEvent = () => {
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate('/event');
  };

  return (
    <div>
      <div class="rounded-lg bg-gray-900 w-full">
        <div class="p-5">
          <h5 class="mb-2 font-sans font-bold text-3xl md:text-4xl tracking-tight sm:leading-none text-white">
            Conduct Event
          </h5>
          <p class=" font-normal text-sm text-gray-400">

            Inspire others to join you in fostering a greener environment,
            tackling waste-related issues, and making a meaningful difference
            through contributions.
          </p>
          <button
            onClick={handleCreateEvent}
            class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Event
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent
