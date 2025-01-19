import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden bg-slate-100 dark:text-white">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 py-5 bg-white/80 dark:bg-black backdrop-blur-sm rounded-t-xl">
              {/* Company Info */}
              <div className="py-8 px-4">
                <div className="flex items-center gap-2 font-bold text-2xl">
                  <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                    <div className="flex items-center gap-2 py-2">
                      <MdOutlineFoodBank size={60} className="text-green-600" />
                      <div>
                        <p className="leading-none uppercase mb-2">Demo</p>
                        <p className="leading-none text-green-600 uppercase">
                          Catering
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <p className="text-sm mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                  eum tenetur.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <FaLocationArrow />
                  <p>City, Example City</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>0171234567</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="hover:scale-110 transition">
                    <FaInstagram className="text-3xl text-red-500" />
                  </a>
                  <a href="#" className="hover:scale-110 transition">
                    <FaFacebook className="text-3xl text-blue-700" />
                  </a>
                  <a href="#" className="hover:scale-110 transition">
                    <FaLinkedin className="text-3xl text-green-700" />
                  </a>
                </div>
              </div>

              {/* Hours and Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 gap-6">
                {/* Hours */}
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Hours</h1>
                  <p>Open Everyday</p>
                  <p>10am — 10pm</p>
                </div>
                {/* Links Column 1 */}
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Important Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link, index) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Links Column 2 */}
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Important Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link, index) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-black">
              @copyright 2025 All rights reserved || Made with by Suparna
            </div>
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default Footer;
