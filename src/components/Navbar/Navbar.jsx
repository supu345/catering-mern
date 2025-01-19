import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md dark:text-white dark:bg-black">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-2 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <div className="flex items-center gap-2 py-2">
                  <MdOutlineFoodBank size={60} className="text-green-600" />{" "}
                  {/* Adjust icon size if needed */}
                  <div>
                    <p className="leading-none uppercase mb-2">Demo</p>
                    <p className="leading-none text-green-600 uppercase">
                      Catering
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navbar Links */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6  text-xl">
                {NavbarLinks.map((data) => (
                  <li className="py-4" key={data.name}>
                    <NavLink to={data.link} activeClassName="active">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dark Mode Toggle */}
            <div>
              <button onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div>

            {/* Buttons and Hamburger */}
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
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Passing the state to ResponsiveMenu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
