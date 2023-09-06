import React from 'react'
import { Link } from 'react-router-dom';
const CreateEvent = () => {
  // const navigate = useNavigate();
  // const handleCreateEvent = () => {
  //   navigate('/event');
  // };

  return (
    <div>
      <div className=" bg-gray-900 rounded-lg w-full">
        <div className="p-5">
          <h5 className="mb-2 font-sans font-bold tracking-tight text-white text-3xl md:text-4xl sm:leading-none">
            Conduct Event
          </h5>
          <p className=" font-normal text-sm text-gray-400">
            Inspire others to join you in fostering a greener environment,
            tackling waste-related issues, and making a meaningful difference
            through contributions.
          </p>
          <Link to="/event">
            <button class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent
