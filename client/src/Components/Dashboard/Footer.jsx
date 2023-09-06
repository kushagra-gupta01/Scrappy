import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto mt-20">
      <div className="p-8 rounded shadow-xl sm:p-16 bg-gray-900">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              {/* Commitment to Sustainability: */}
              <br className="hidden md:block" />
              Pioneering Change,&nbsp;
              <span className="inline-block text-deep-purple-accent-400">
                Preserving Our Planet .
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 md:hidden text-base text-gray-400">
              Sustainability requires a collective effort. By embracing
              sustainable practices in our daily lives, we can create a world
              where everyone can coexist harmoniously.
            </p>
            <p className="mb-4 hidden md:block text-base text-gray-400">
            Introducing our innovative app that revolutionizes cleanliness and environmental stewardship. Track individual contributions, view real-time garbage stats, and compete on a gamified leaderboard. Host eco-friendly events, donate for tree plantation and local dustbins. Join us in making a lasting impact on our planet.
            </p>
            <a
              href="#"
              class="inline-flex text-sm items-center text-blue-600 hover:underline lg:mt-4"
            >
              Learn More
              <svg
                class="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
