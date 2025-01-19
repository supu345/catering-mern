import React from "react";
import Slider from "../components/slider";
import { GiFoodTruck } from "react-icons/gi";
import SampleIcon from "../assets/images/123.png";
import SampleIcon1 from "../assets/images/beef.png";
import SampleIcon2 from "../assets/images/biriyani.png";
import SampleIcon3 from "../assets/images/dal.png";
import SampleIcon4 from "../assets/images/desert.png";
import SampleIcon5 from "../assets/images/duck.png";
import SampleIcon6 from "../assets/images/egg.png";
import SampleIcon7 from "../assets/images/fish.png";
import SampleIcon8 from "../assets/images/rice.png";
import SampleIcon9 from "../assets/images/vegetable.png";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Home = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Slider />
      {/*about*/}
      <div className="container py-[60px]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* About Demo Catering Section */}
            <div>
              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
              >
                <GiFoodTruck className="text-[100px] mx-auto mt-[100px]" />
                <p className="text-3xl mt-4 font-bold text-center">
                  About Demo Catering
                </p>
              </motion.p>

              <div className="border-2 border-green-500 mt-4 mx-auto w-1/2"></div>
              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="py-6 text-xl font-bold text-center">
                  Our tasty Story
                </p>
                <p className="text-center px-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                </p>
              </motion.p>
            </div>

            {/* First Image Section */}
            <div className="group">
              <img
                src="https://images.pexels.com/photos/9646843/pexels-photo-9646843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Delicious Dish"
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Second Image Section */}
            <div className="group">
              <img
                src="https://images.pexels.com/photos/27668700/pexels-photo-27668700/free-photo-of-a-close-up-of-a-grill-with-meat-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Grill with Meat and Vegetables"
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      {/*menu*/}
      <div className="container py-[80px]">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="font-dancing text-5xl text-center">
            <p>Menu Categories</p>
          </div>
        </motion.p>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 py-5">
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Noodles</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon1}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Beef</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon2}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Grilled & Barbecue</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon3}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Soups & Salads</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon4}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Beverages</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon5}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Grilled & Barbecue</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon6}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Egg</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon7}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Seafood</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon8}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Main Courses</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={SampleIcon9}
                alt="Sample Icon"
                className="w-20 h-20 object-cover"
              />
              <p className="mt-4 text-2xl">Soups & Salads</p>
            </div>
          </div>
        </motion.p>
      </div>

      {/*dawat*/}
      <div className="container py-[80px] ">
        <div className="flex flex-col gap-[50px] md:flex-row ">
          <div className="group w-[400px] md:w-[600px]">
            <img
              src="https://images.pexels.com/photos/7245469/pexels-photo-7245469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img"
              className="w-[400px] md:w-[600px] flex justify-center  h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center justify-center text-center h-screen px-4">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-bebas">
                Hosting A Dawat? Call Us
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <button className="mt-6 bg-gradient-to-r from-green-600 to-green-900 text-white px-4 sm:px-6 py-2 rounded-md hover:opacity-90 transition-all">
                Open Menu
              </button>
            </motion.p>
          </div>
        </div>
      </div>
      {/*corporate catering*/}
      <div className="container py-[80px] ">
        <div className="flex flex-col gap-[50px] md:flex-row ">
          <div className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center justify-center text-center h-screen px-4">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-4xl font-bold uppercase font-bebas">
                a leader in corporate catering
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <button className="mt-6 bg-gradient-to-r from-green-600 to-green-900 text-white px-6 py-2 rounded-md hover:opacity-90 transition-all">
                Open Menu
              </button>
            </motion.p>
          </div>
          <div className="group w-[400px] md:w-[600px]">
            <img
              src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img"
              className="w-[400px] md:w-[600px] h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        </div>
      </div>
      {/*make weddings*/}
      <div className="container py-[80px] ">
        <div className="flex flex-col gap-[50px] md:flex-row ">
          <div className="group w-[400px] md:w-[600px]">
            <img
              src="https://images.pexels.com/photos/8818732/pexels-photo-8818732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img"
              className="w-[400px] md:w-[600px] h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center justify-center text-center h-screen px-4">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-4xl font-bold uppercase font-bebas">
                we also make weddings unforgettable
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                minima asperiores officia consectetur accusantium quibusdam
                optio neque dolorem voluptatem velit?
              </p>
              <button className="mt-6 bg-gradient-to-r from-green-600 to-green-900 text-white px-6 py-2 rounded-md hover:opacity-90 transition-all">
                Open Menu
              </button>
            </motion.p>
          </div>
        </div>
      </div>
      {/*Our offerings*/}

      <div className="container py-[80px]  ">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <p className="text-5xl font-bold uppercase mb-9">Our offerings</p>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
          <div className="group">
            <img
              src="https://images.pexels.com/photos/28976231/pexels-photo-28976231/free-photo-of-elegant-charcuterie-board-for-events-and-catering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Chicken Roast"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
            />
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                catering service
              </p>

              <p className="text-xl -mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, placeat.amet consectetur adipisicing
              </p>
            </motion.p>
          </div>
          <div className="group">
            <img
              src="https://images.pexels.com/photos/8887061/pexels-photo-8887061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=" decorator SERVICE"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
            />
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                decorator SERVICE
              </p>
              <p className="text-xl -mt-2">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, placeat.amet consectetur adipisicing
              </p>
            </motion.p>
          </div>
          <div className="group">
            <img
              src="https://images.pexels.com/photos/27025523/pexels-photo-27025523/free-photo-of-sandwiches-and-sweet-pastry-on-venue-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Beef Tehari"
              className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
            />

            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                event management
              </p>
              <p className="text-xl -mt-2">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, placeat.amet consectetur adipisicing
              </p>
            </motion.p>
          </div>
        </div>
      </div>
      {/* Best sellers*/}
      <div className="container py-[80px]  ">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <p className="text-5xl font-bold uppercase mb-9 font-bebas">
            Best sellers
          </p>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <div className="group">
              <img
                src="https://images.pexels.com/photos/17650193/pexels-photo-17650193/free-photo-of-food-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chicken Roast"
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
              />
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                Chicken Roast
              </p>
              <p className="text-xl -mt-2">Lorem ipsum dolor sit</p>
            </div>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <div className="group">
              <img
                src="https://images.pexels.com/photos/3981486/pexels-photo-3981486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Beef Achari"
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
              />
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                Beef Achari
              </p>
              <p className="text-xl -mt-2">Lorem ipsum dolor sit</p>
            </div>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <div className="group">
              <img
                src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Beef Tehari"
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
              />
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                Beef Tehari
              </p>
              <p className="text-xl -mt-2">Lorem ipsum dolor sit</p>
            </div>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <div className="group">
              <img
                src="https://images.pexels.com/photos/29274607/pexels-photo-29274607/free-photo-of-grilled-meat-skewers-on-outdoor-barbecue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Live BBQ"
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90 rounded-md"
              />
              <p className="uppercase text-3xl font-bold font-bebas mt-4">
                Live BBQ
              </p>
              <p className="text-xl -mt-2">Lorem ipsum dolor sit</p>
            </div>
          </motion.p>
        </div>
      </div>
      {/*  What people are saying*/}

      <div className="container py-[80px] ">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <p className="text-5xl font-bold uppercase mb-9 font-bebas">
            {" "}
            What people are saying
          </p>
        </motion.p>

        <Testimonials />
      </div>
      {/* Ready to PLACE AN ORDER?*/}
      <div className="container py-[40px] ">
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <p className="text-5xl font-bold uppercase mb-9 font-bebas text-center">
            {" "}
            Ready to PLACE AN ORDER?
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa{" "}
            <br />
            voluptates eaque laboriosam cumque officiis ipsa!
          </p>
          <div className="px-9 py-9 ml-[450px]">
            <button className="bg-green-600 hover:bg-green-300 transition-all duration-600 font-bold text-white px-3 py-2 ">
              01712345678
            </button>
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
