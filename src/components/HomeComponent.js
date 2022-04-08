import React from "react";

export default function HomeComponent() {
  const users = [
    {
      id: 1,
      nama: "Aris",
      alamat: "Babantar",
      umur: 13,
    },
    {
      id: 2,
      nama: "Aris",
      alamat: "Babantar",
      umur: 13,
    },
    {
      id: 3,
      nama: "Aris",
      alamat: "Babantar",
      umur: 13,
    },
  ];
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
      <span className=" text-2xl font-bold py-10">Hai</span>
      <TableComponent />
    </div>
  );
}

export function TableComponent() {
  return (
    <div className="my-5 mx-32">
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-gray-50 border-2">
          <tr>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              No.
            </th>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              Nama Depan
            </th>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              Nama Belakang
            </th>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              Alamat
            </th>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              Pekerjaan
            </th>
            <th className="border border-slate-300 p-3 text-left tracking-wide">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-slate-300 p-2">1</td>
            <td className="border border-slate-300 p-2">Asep</td>
            <td className="border border-slate-300 p-2">Ahmad</td>
            <td className="border border-slate-300 p-2">
              Jl Bojong soabf kabupaten bandung
            </td>
            <td className="border border-slate-300 p-2">Pro Gammer</td>
            <td className="border border-slate-300 p-2">
              <div className="space-x-2 text-center">
                <button className="bg-green-400 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-slate-300 p-2">1</td>
            <td className="border border-slate-300 p-2">Asep</td>
            <td className="border border-slate-300 p-2">Ahmad</td>
            <td className="border border-slate-300 p-2">
              Jl Bojong soabf kabupaten bandung
            </td>
            <td className="border border-slate-300 p-2">Pro Gammer</td>
            <td className="border border-slate-300 p-2">1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
