import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KontenbaseClient } from "@kontenbase/sdk";
import { useForm } from "react-hook-form";
import { Tab } from "@headlessui/react";

const kontenbase = new KontenbaseClient({
  apiKey: "5318a141-e8e5-467a-95cb-e8fb0aca58cf",
});

export default function LoginComponent() {
  return (
    <div className="w-full h-screen bg-orange-200">
      <h1 className="text-5xl font-extrabold text-center pt-14">
        WELCOME TO MY WEBSITE
      </h1>
      <div className="flex mt-14">
        <Tab.Group as="div" className="mx-auto">
          <Tab.List className="space-x-5 text-white mb-3">
            <Tab className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600">
              Login
            </Tab>
            <Tab className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600">
              Register
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <MasukComponent />
            </Tab.Panel>
            <Tab.Panel>
              <RegisterComponent />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export function MasukComponent() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);
    const user = await kontenbase.auth.login(data);
    console.log(user.user);
    if (user.status == 200) {
      localStorage.setItem("profile", JSON.stringify(user.user));
      localStorage.setItem("isLogin", "true");
      navigate("/home");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (isLogin) navigate("/home");
  });

  return (
    <div>
      <div className="flex">
        <div className="mx-auto mt-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Email :
              </span>
              <input
                {...register("email")}
                type="text"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Password :
              </span>
              <input
                {...register("password")}
                type="password"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <div className="mt-3">
              <button
                className="bg-sky-500 px-4 py-2 rounded text-white font-semibold"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function RegisterComponent() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data, e) => {
    // console.log(data);
    e.target.reset();
    const user = await kontenbase.auth.register(data);
    // console.log(user);
    alert("Sukses menabahkan data");
  };

  return (
    <div>
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
                Email :
              </span>
              <input
                {...register("email")}
                type="email"
                className="w-80 h-10 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border-2 border-gray-500"
              />
            </label>
            <label className="block">
              <span className="block text-lg font-bold text-slate-700">
                Password :
              </span>
              <input
                {...register("password")}
                type="password"
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
    </div>
  );
}
