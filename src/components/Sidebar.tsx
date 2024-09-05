import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../utils/paths";

import closeIcon from "../assets/close.svg";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [hamburger, setHamburger] = useState(false);
  const activeClass = "text-black capitalize border-r-2  font-bold";
  return (
    <>
      <div className="box-content hidden min-h-screen min-w-[210px] flex-col bg-gray-200 py-10 pl-2 md:flex md:w-1/5 lg:pl-4">
        <p className="text-xl font-semibold text-gray-600">Covid-19 App</p>
        <ul className="flex flex-col gap-5 py-10 font-semibold text-gray-400">
          {routes.map((item, i) => {
            return (
              <Link to={item.path}>
                <li
                  className={`flex gap-2 ${
                    pathname === item.path ? activeClass : ""
                  }`}
                >
                  <img src={item.img} alt="" className="w-6 h-6" />
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="absolute top-0 z-10 w-full bg-gray-100 px-8 py-4 shadow-lg md:hidden">
        <div onClick={() => setHamburger((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={`absolute left-0 top-0 h-screen w-3/5 shadow-xl ${
            !hamburger ? "hidden" : ""
          }`}
        >
          <div className="min-h-screen flex-col bg-white py-10 pl-2 md:flex md:w-1/5 lg:pl-4 ">
            <div
              className="absolute right-4 top-5 w-auto rounded-full border p-2 shadow-xl hover:cursor-pointer"
              onClick={() => setHamburger((prev) => !prev)}
            >
              <img src={closeIcon} alt="" className="w-6 h-6" />
            </div>
            <h2 className="py-5 text-xl font-semibold">Covid19-Contact-App</h2>
            <ul className="flex flex-col gap-5 py-10 font-semibold text-gray-400">
              {routes.map((item, i) => {
                return (
                  <Link
                    to={item.path}
                    onClick={() => setHamburger(false)}
                    key={i}
                  >
                    <li
                      className={`flex gap-2 ${
                        pathname === item.path ? activeClass : ""
                      }`}
                    >
                      <img src={item.img} alt="" />
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
