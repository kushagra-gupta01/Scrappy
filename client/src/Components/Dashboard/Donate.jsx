import React from 'react'
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <div>
      <div class="p-6  w-full rounded-lg bg-gray-900">
        <svg
          class="w-10 h-10 mb-2 text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <h5 class="mb-2 font-sans font-bold tracking-tight text-white md:text-4xl text-3xl sm:leading-none">
          Want to donate?
        </h5>
        <p class="mb-3 font-sm md:hidden text-sm text-gray-400">
          We gratefully accept monetary donations for environmental initiatives
          like tree planting and installing local dustbins.
        </p>
        <p class="mb-3 font-sm hidden md:block text-sm text-gray-400 lg:mt-1">
          Support our project and make a tangible difference by donating towards
          environmental initiatives like tree planting and installing local
          dustbins. Your contributions directly impact our community, creating a
          cleaner, greener, and more sustainable future.
        </p>
        <Link to="/donate">
          <button class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Donate
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
        </Link>
      </div>
    </div>
  );
}

export default Donate
