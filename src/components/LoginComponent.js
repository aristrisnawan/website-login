import React from "react";

export default function LoginComponent() {
  return (
    <div className="w-full h-screen bg-orange-200">
      <h1 className="text-5xl font-extrabold text-center pt-14">
        WELCOME TO MY WEBSITE
      </h1>

      <div className="flex">
        <div className="mx-auto mt-14">
          <form>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Email :
              </span>
              <input
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Password :
              </span>
              <input
                type="password"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </label>
            <div className="mt-3">
              <button className="bg-sky-500 px-4 py-2 rounded text-white font-semibold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
