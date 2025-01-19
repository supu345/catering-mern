import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Blog = () => {
  return (
    <div className=" py-[80px] dark:bg-black dark:text-white">
      <div
        className="relative h-screen bg-local bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7234404/pexels-photo-7234404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full text-white z-10">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="text-5xl font-bold mb-4 uppercase ">
              essential reads
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="text-center max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              molestias aliquid ullam ea doloremque officiis nobis quia officia
              cum eum?
            </p>
          </motion.p>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
        {/* Image Section */}
        <div className="w-[400px] md:w-[400px] ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://images.pexels.com/photos/6053926/pexels-photo-6053926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col ml-0 md:ml-9">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-gray-500">Jan 15, 2025</p>
              <p className="text-4xl md:text-6xl font-bold uppercase font-bebas mt-4">
                Who has the best catering service?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
        {/* Image Section */}
        <div className="w-[400px] md:w-[400px] ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://images.pexels.com/photos/7157632/pexels-photo-7157632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Catering Service"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col ml-0 md:ml-9">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-gray-500">Jan 15, 2025</p>
              <p className="text-4xl md:text-6xl font-bold uppercase font-bebas mt-4">
                Who has the best catering service?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 mt-[70px]">
        {/* Image Section */}
        <div className="w-[400px] md:w-[400px] ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://images.pexels.com/photos/7158672/pexels-photo-7158672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Catering Service"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col ml-0 md:ml-9">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-gray-500">Jan 15, 2025</p>
              <p className="text-4xl md:text-6xl font-bold uppercase font-bebas mt-4">
                Who has the best catering service?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <p className="mt-4 text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
            </motion.p>
          </div>
        </div>
      </div>

      {/* <div className=" container flex flex-row gap-6 mt-[70px]">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/6053926/pexels-photo-6053926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
        <div className="w-1/2 ">
          <div className=" flex flex-col ml-9">
            <p>Jan15, 2025</p>
            <p className="text-6xl font-bold uppercase font-bebas">
              Who has the best catering service?
            </p>
            <p className="mt-4 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              minima asperiores officia consectetur accusantium quibusdam optio
              neque dolorem voluptatem velit?
            </p>
            <p className="mt-4 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              minima asperiores officia consectetur accusantium quibusdam optio
              neque dolorem voluptatem velit?
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Blog;
