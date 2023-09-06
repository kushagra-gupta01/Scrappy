import React from "react";

const Signup = () => {
  return (
    <>
      <form action="#">
        <div class="relative mb-6">
          <input
            type="text"
            class="block h-12 w-full rounded-full border-0 bg-slate-900 px-3 py-[0.32rem] outline-none focus:outline-blue-500 transition-all text-sm caret-white text-white"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="relative mb-6">
          <input
            type="email"
            class="peer block h-12 w-full rounded-full border-0 bg-slate-900 px-3 py-[0.32rem] leading-[2.15] outline-none focus:outline-blue-500 transition-all text-sm caret-white text-white"
            placeholder="Email address"
            required
          />
        </div>
        <div class="relative mb-6">
          <input
            type="text"
            class="peer block h-12 w-full rounded-full border-0 bg-slate-900 px-3 py-[0.32rem] leading-[2.15] outline-none focus:outline-blue-500 transition-all text-sm caret-white text-white"
            placeholder="Username"
            required
          />
        </div>
        <div class="relative mb-6">
          <input
            type="text"
            class="peer block h-12 w-full rounded-full border-0 bg-slate-900 px-3 py-[0.32rem] leading-[2.15] outline-none focus:outline-blue-500 transition-all text-sm caret-white text-white"
            placeholder="Locality"
            required
          />
        </div>

        <div class="relative mb-6">
          <input
            type="password"
            class="peer block h-12 w-full rounded-full border-0 bg-slate-900 px-3 py-[0.32rem] leading-[2.15] outline-none focus:outline-blue-500 transition-all text-sm caret-white text-white"
            placeholder="Password"
            required
          />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
