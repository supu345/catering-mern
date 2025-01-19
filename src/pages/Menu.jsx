import React from "react";
import HeroImg from "../assets/images/pic1.png";
import HeroImg1 from "../assets/images/pic2.png";
import HeroImg2 from "../assets/images/pic3.png";
const Menu = () => {
  return (
    <div className=" py-[80px] dark:bg-black dark:text-white">
      {/* parallex */}
      <div
        className="bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-center text-white text-7xl font-bold capitalize">
            EXPLORE OUR MENU
          </p>
          <h1 className="text-xl pt-3 text-white">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore{" "}
            <br />
            molestias aliquid ullam ea doloremque officiis nobis quia officia
            cum eum
          </h1>
          <div className="w-12 h-1 bg-white mt-2 mb-6"></div>
        </div>
      </div>

      <div className="px-5 container flex flex-col md:flex-row gap-6 mt-7">
        {/* 1 menu */}
        <div className="w-full md:w-1/2 bg-green-100 mb-6 md:mb-0">
          <div>
            <p className="bg-black dark:bg-slate-600 text-white  px-4 text-xl font-bold uppercase py-7">
              Bangladeshi/Indian Cuisine
            </p>
            <p className="uppercase m-5 font-bold dark:text-black">
              Rice-bashed
            </p>
            <div className="border border-black w-full md:w-[350px] ml-5"></div>
            <p className="uppercase m-5 font-bold dark:text-black">Item</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 ml-4 items-start md:items-center">
            <div className="font-bold uppercase dark:text-black">
              <p>Plain Polao</p>
              <p>Pea Polao</p>
              <p>Kofta Polao</p>
              <p>Kachhi Biriyani</p>
              <p>Basmoti Kachhi</p>
              <p>Beef Kachhi</p>
              <p>Bhuna Khichuri</p>
            </div>
            <div>
              <img
                src={HeroImg}
                alt=""
                className="animate-spin-slow img-shadow w-[200px] mx-auto ml-[120px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 ml-4 items-start md:items-center mt-8">
            <div>
              <img
                src={HeroImg1}
                alt=""
                className="img-shadow w-[200px] mx-auto"
              />
            </div>
            <div className="font-bold uppercase mr-[160px] dark:text-black">
              <p>Plain Polao</p>
              <p>Pea Polao</p>
              <p>Kofta Polao</p>
              <p>Kachhi Biriyani</p>
              <p>Basmoti Kachhi</p>
              <p>Beef Kachhi</p>
              <p>Bhuna Khichuri</p>
            </div>
          </div>
        </div>

        {/* 2 menu */}
        <div className="w-full md:w-1/2 bg-red-100 mb-6 md:mb-0">
          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:w-1/2 bg-black  dark:bg-gray-800 h-[700px]">
              <img
                src={HeroImg2}
                alt=""
                className="img-shadow w-[200px] mx-auto"
              />
              <p className="mt-4 text-white uppercase text-xl ml-6 mb-2">
                Mutton
              </p>
              <div className="border border-white w-[230px] ml-5"></div>
              <p className="uppercase m-5 font-bold text-white">Item</p>
              <div className="font-bold uppercase text-sm mr-[160px] text-white ml-5">
                <p>Plain Polao</p>
                <p>Pea Polao</p>
                <p>Kofta Polao</p>
                <p>Kachhi Biriyani</p>
                <p>Basmoti Kachhi</p>
                <p>Beef Kachhi</p>
                <p>Bhuna Khichuri</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mt-4 uppercase text-xl ml-[200px] mb-2 font-bold dark:text-black">
                Beef
              </p>
              <div className="border border-black w-[230px] ml-5"></div>
              <p className="uppercase m-5 font-bold text-black">Item</p>
              <div className="font-bold uppercase text-sm mr-[160px] text-black ml-5">
                <p>Plain Polao</p>
                <p>Pea Polao</p>
                <p>Kofta Polao</p>
                <p>Kachhi Biriyani</p>
                <p>Basmoti Kachhi</p>
                <p>Beef Kachhi</p>
                <p>Bhuna Khichuri</p>
              </div>
              <img
                src={HeroImg2}
                alt=""
                className="animate-spin-slow img-shadow w-[200px] mx-auto mt-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 container flex flex-col md:flex-row gap-6 mt-7">
        {/* 1 menu */}
        <div className="w-full md:w-1/2 bg-red-100 mb-6 md:mb-0">
          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:w-1/2 bg-black dark:bg-gray-700 h-[700px]">
              <img
                src={HeroImg2}
                alt=""
                className="img-shadow w-[200px] mx-auto"
              />
              <p className="mt-4 text-white uppercase text-xl ml-6 mb-2">
                Mutton
              </p>
              <div className="border border-white w-[230px] ml-5"></div>
              <p className="uppercase m-5 font-bold text-white">Item</p>
              <div className="font-bold uppercase text-sm mr-[160px] text-white ml-5">
                <p>Plain Polao</p>
                <p>Pea Polao</p>
                <p>Kofta Polao</p>
                <p>Kachhi Biriyani</p>
                <p>Basmoti Kachhi</p>
                <p>Beef Kachhi</p>
                <p>Bhuna Khichuri</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mt-4 uppercase text-xl ml-[200px] mb-2 font-bold dark:text-black">
                Beef
              </p>
              <div className="border border-black w-[230px] ml-5"></div>
              <p className="uppercase m-5 font-bold text-black">Item</p>
              <div className="font-bold uppercase text-sm mr-[160px] text-black ml-5">
                <p>Plain Polao</p>
                <p>Pea Polao</p>
                <p>Kofta Polao</p>
                <p>Kachhi Biriyani</p>
                <p>Basmoti Kachhi</p>
                <p>Beef Kachhi</p>
                <p>Bhuna Khichuri</p>
              </div>
              <img
                src={HeroImg2}
                alt=""
                className="animate-spin-slow img-shadow w-[200px] mx-auto mt-[20px]"
              />
            </div>
          </div>
        </div>

        {/* 4 menu */}
        <div className="w-full md:w-1/2 bg-orange-100 mb-6 md:mb-0">
          <div>
            <p className="bg-black text-white dark:bg-green-700 px-4 text-xl font-bold uppercase py-7">
              Bangladeshi/Indian Cuisine
            </p>
            <p className="uppercase m-5 font-bold dark:text-black">
              Rice-bashed
            </p>
            <div className="border border-black w-full md:w-[350px] ml-5 "></div>
            <p className="uppercase m-5 font-bold dark:text-black">Item</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 ml-4 items-start md:items-center">
            <div className="font-bold uppercase dark:text-black">
              <p>Plain Polao</p>
              <p>Pea Polao</p>
              <p>Kofta Polao</p>
              <p>Kachhi Biriyani</p>
              <p>Basmoti Kachhi</p>
              <p>Beef Kachhi</p>
              <p>Bhuna Khichuri</p>
            </div>
            <div>
              <img
                src={HeroImg}
                alt=""
                className="animate-spin-slow img-shadow w-[200px] mx-auto ml-[120px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 ml-4 items-start md:items-center mt-8">
            <div>
              <img
                src={HeroImg1}
                alt=""
                className="img-shadow w-[200px] mx-auto"
              />
            </div>
            <div className="font-bold uppercase mr-[160px] dark:text-black">
              <p>Plain Polao</p>
              <p>Pea Polao</p>
              <p>Kofta Polao</p>
              <p>Kachhi Biriyani</p>
              <p>Basmoti Kachhi</p>
              <p>Beef Kachhi</p>
              <p>Bhuna Khichuri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
