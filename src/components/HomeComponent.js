import React from "react";

export default function HomeComponent() {
  return (
    <div className="w-full h-screen">
      <h1 className="font-bold text-2xl text-center py-10">Form Data</h1>
      <div className="flex mt=5">
        <div className="mx-auto">
          <form action="">
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Nama Depan:
              </span>
              <input
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Nama Belakang :
              </span>
              <input
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Alamat :
              </span>
              <textarea
                name=""
                id=""
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              ></textarea>
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Pekerjaan :
              </span>
              <input
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <div className="mt-3 space-x-2">
              <button className="bg-sky-500 px-4 py-2 rounded text-white font-semibold">
                Kirim
              </button>
              <button className="bg-sky-500 px-4 py-2 rounded text-white font-semibold">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
