import React from 'react';
import "../../CSS/TitleDesign.css";

const Landing2 = () => {
  return (
    <div class="mt-7">
      <div class='ml-12 mb-20'>
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;Scrappy&nbsp;
          </span>
        </button>
      </div>

      <h1 class="md:text-4xl lg:text-6xl text-white font-mono font-semibold ml-12 pr-9 pb-5">
        Pioneering <br /> Sustainability.
      </h1>
      <h3 class="w-4/5 ml-12 pr-9 text-sm text-zinc-400 leading-7">
        Introducing Scrappy, an innovative app that is
        revolutionizing the way we approach garbage collection and environmental
        sustainability. Our app is designed to address the pressing issue of
        waste management by providing a comprehensive and user-friendly
        platform.
      </h3>
    </div>
  );
}

export default Landing2