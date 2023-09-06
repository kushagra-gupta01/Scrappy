```css
<div class="relative mb-6" data-te-input-wrapper-init>
        <input
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput22"
          placeholder="Locality"
        />
        <label
          for="exampleFormControlInput22"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Locality
        </label>
</div>
```

import React from "react";

export const Information = () => {
  return (
    <div className="flex flex-col w-96 p-6 mx-auto md:right-0 bg-slate-950 h-screen">
      <h1 className="text-lg font-medium mb-3 text-gray-300">
        Join over 25 million
        <br />
        learners from around the globe
      </h1>

      <h2 className="text-xs text-zinc-400 pb-6 ">Master the languages of the web HTML, CSS, and JavaScript. This path will prepare you to build websites and then build interactive web apps.</h2>

      <div class="relative mb-2">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="email"
          id="input-group-1"
          class="bg-gray-50 border border-gray-300 text-slate-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@xyz.com"
          required
        />
      </div>
      <div class="flex mb-5">
        <span class="inline-flex items-center px-3 text-sm text-slate-950 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          @
        </span>
        <input
          type="text"
          id="website-admin"
          class="rounded-none rounded-r-lg bg-gray-50 border text-slate-950 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="username"
          required
        />
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
        Login
      </button>
    </div>
  );
};

export default Information;

