import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-7 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div> */}
        <nav className="mt-1">
          <ul className="space-y-2 text-xl">
            {NavbarLinks.map((data) => (
              <li>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-xl">
            <FaInstagram className="text-2xl text-red-500" />
            <FaFacebookF className="text-2xl text-blue-700" />
            <button
              className="bg-green-600 hover:bg-green-300 transition-all duration-600 font-bold text-white px-3 py-2 "
              onClick={() => {
                handleOrderPopup();
              }}
            >
              01712345678
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
