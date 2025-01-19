import React from "react";
import Testimonials from "../components/Testimonials";

const Services = () => {
  return (
    <div className=" py-[80px] dark:bg-black dark:text-white">
      {/* parallex */}
      <div
        className="relative bg-fixed h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <p className="text-center text-white text-7xl font-bold">
            Services we offer
          </p>
          <h1 className="text-xl pt-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore{" "}
            <br />
            molestias aliquid ullam ea doloremque officiis nobis quia officia
            cum eum
          </h1>
          <div className="w-12 h-1 bg-white mt-2 mb-6"></div>
        </div>
      </div>
      {/* services */}
      <div className="mt-9 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <div>
            <img
              src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              Servers
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              Chafing dishes
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              Plates, glasses
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              Tables, chairs
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/30208568/pexels-photo-30208568/free-photo-of-festive-thanksgiving-dinner-gathering.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              unique items
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-[350px] w-full object-cover"
            />
            <p className="text-2xl py-6 text-center font-bold uppercase font-bebas">
              360 event management
            </p>
            <p className="py-3 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, consequatur? Laboriosam ex odio iure odit adipisci
              aperiam officia at aspernatur? Laboriosam ex odio iure odit
              adipisci aperiam officia
            </p>
          </div>
        </div>
      </div>
      {/* TERMS */}

      <div className="container ">
        <p className="text-3xl font-bold">TERMS</p>
        <p className="py-1">
          1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        </p>
        <p className="py-1">
          2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Officiis.consectetur adipisicing elit. Officiis
        </p>
        <p className="py-1">
          3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Officiis.consectetur adipisicing elit. Officiis
        </p>
      </div>
      {/* Reviews */}
      <div className="container ">
        <p className="text-3xl font-bold uppercase mt-7">Reviews</p>

        <Testimonials />
      </div>
    </div>
  );
};

export default Services;
