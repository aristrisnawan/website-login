import axios from "axios";
import React, { useState, useEffect } from "react";
import { Url } from "./Url";
import { useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    axios.post(`${Url}/identitas`, data).then((res) => {
      alert("succes");
      window.location.reload();
    });
  };

  const user = localStorage.getItem("profile");
  const profile = JSON.parse(user);

  const logOut = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("isLogin");
    alert("Berhasil Logout");
    navigate("/");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === undefined;
    if (isLogin) navigate("/");
  });

  return (
    <div className="w-full h-screen">
      <div className="flex flex-row justify-between mx-64 mt-3">
        <div>
          <span className=" text-2xl font-bold py-10">
            Hai {profile.firstName} &nbsp;
            {profile.lastName}
          </span>
        </div>
        <div>
          <button
            onClick={() => logOut()}
            className="px-3 py-2 bg-orange-900 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
      <h1 className="font-bold text-2xl text-center py-10">Form Data</h1>
      <div className="flex mt=5">
        <div className="mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Nama Depan:
              </span>
              <input
                {...register("firstName")}
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Nama Belakang :
              </span>
              <input
                {...register("lastName")}
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Alamat :
              </span>
              <textarea
                {...register("alamat")}
                id=""
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              ></textarea>
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Pekerjaan :
              </span>
              <input
                {...register("pekerjaan")}
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <div className="mt-3 space-x-2">
              <button
                className="bg-sky-500 px-4 py-2 rounded text-white font-semibold"
                type="submit"
              >
                Kirim
              </button>
              <button
                className="bg-sky-500 px-4 py-2 rounded text-white font-semibold"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <TableComponent />
    </div>
  );
}

export function TableComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${Url}/identitas`).then((res) => {
      const listData = res.data;
      // console.log(listData);
      setData(listData);
    });
  }, []);

  const handleDel = (id) => {
    // console.log(id);
    axios.delete(`${Url}/identitas/${id}`).then((res) => {
      alert("succes hapus");
      window.location.reload();
    });
  };

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
          {data.map((list, index) => {
            return (
              <tr className="hover:bg-gray-50" key={index}>
                <td className="border border-slate-300 p-2">{(index += 1)}</td>
                <td className="border border-slate-300 p-2">
                  {list.firstName}
                </td>
                <td className="border border-slate-300 p-2">{list.lastName}</td>
                <td className="border border-slate-300 p-2">{list.alamat}</td>
                <td className="border border-slate-300 p-2">
                  {list.pekerjaan}
                </td>
                <td className="border border-slate-300 p-2">
                  <div className="space-x-2 text-center flex flex-row">
                    <div>
                      <Modal edit={list} />
                    </div>
                    <div>
                      <button
                        className="bg-red-600 text-white px-2 py-1 rounded"
                        onClick={() => handleDel(list._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function Modal({ edit }) {
  const { register, setValue, handleSubmit } = useForm();
  let [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    axios.patch(`${Url}/identitas/${edit._id}`, data).then((res) => {
      alert("Edit success");
      window.location.reload();
    });
  };

  return (
    <div>
      <p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-400 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
      </p>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className="flex flex-row justify-center -mt-96 mb-4"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <div className="bg-white rounded z-10 p-10">
          <Dialog.Title>
            <span className="text-2xl font-semibold">Edit Data</span>
          </Dialog.Title>
          <Dialog.Description>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <label className="block">
                <span className="block text-lg font-bold text-slate-700">
                  Nama Depan:
                </span>
                <input
                  {...register("firstName")}
                  {...setValue("firstName", edit.firstName)}
                  type="text"
                  className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
                />
              </label>
              <label className="block">
                <span className="block text-lg font-bold text-slate-700">
                  Nama Belakang :
                </span>
                <input
                  {...register("lastName")}
                  {...setValue("lastName", edit.lastName)}
                  type="text"
                  className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
                />
              </label>
              <label className="block">
                <span className="block text-lg font-bold text-slate-700">
                  Alamat :
                </span>
                <textarea
                  {...register("alamat")}
                  {...setValue("alamat", edit.alamat)}
                  id=""
                  className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
                ></textarea>
              </label>
              <label className="block">
                <span className="block text-lg font-bold text-slate-700">
                  Pekerjaan :
                </span>
                <input
                  {...register("pekerjaan")}
                  {...setValue("pekerjaan", edit.pekerjaan)}
                  type="text"
                  className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
                />
              </label>
              <div className=" space-x-3 mt-2">
                <button
                  type="submit"
                  className="bg-sky-500 px-4 py-2 rounded text-white font-semibold"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-sky-500 px-4 py-2 rounded text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </form>
          </Dialog.Description>
        </div>
      </Dialog>
    </div>
  );
}
