import React from 'react';
import '../../CSS/TitleDesign.css';

const Pioneer = () => {
  return (
    <div class="mx-auto mt-7">
      <div class="flex flex-col">
        <div class="mx-auto">
          <button data-text="Awesome" class="button">
            <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;Scrappy&nbsp;
            </span>
          </button>
        </div>

        {/* <button class=""> DUMP IT </button> */}
        <h1 class="text-center text-3xl text-white font-mono font-semibold ml-12 pr-9 pb-5">
          Pioneering <br /> Sustainability
        </h1>
      </div>
    </div>
  );
}

export default Pioneer