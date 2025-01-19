import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const sliderItems = [
  {
    image:
      "https://images.pexels.com/photos/1121482/pexels-photo-1121482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " We Value Your Feedback!",
    desc: " How was your experience with Demo Catering? Please rate our service and let us know how we can improve",
  },
  {
    image:
      "https://images.pexels.com/photos/28976235/pexels-photo-28976235/free-photo-of-gourmet-charcuterie-and-cheese-board-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " Choose Your Menu",
    desc: "Explore our curated menu options or customize your own! Select dishes from our diverse categories, including appetizers, main courses, desserts, and beverages",
  },
  {
    image:
      "https://images.pexels.com/photos/2365526/pexels-photo-2365526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " Cancel Your Order?",
    desc: "Are you sure you want to cancel your catering order? If there’s anything we can assist with, please let us know.",
  },
  {
    image:
      "https://images.pexels.com/photos/2337795/pexels-photo-2337795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " Booking Confirmation",
    desc: " Thank you for choosing Demo Catering! Your booking request has been received. Our team will contact you shortly to finalize the details. For urgent inquiries, feel free to call us at [017123456]",
  },
  {
    image:
      "https://images.pexels.com/photos/3614/lunch-cutlery-silverware-flatware.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " What’s the Occasion?",
    desc: " Please select the type of event you’re planning, so we can provide tailored recommendations and menu options",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderItems.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  useEffect(() => {
    if (sliderItems.length > 0) {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentImage]);

  return (
    <div className="w-[85%] lg:w-[90%] mx-auto dark:bg-black">
      <div className="container  px-2 rounded mt-4">
        <div className="relative h-[500px] md:h-[600px] w-full bg-slate-300 overflow-hidden z-10">
          <div className="absolute z-10 top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4">
            <button
              onClick={prevImage}
              className=" shadow-md rounded-full p-1 text-2xl"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="  shadow-md rounded-full p-1 text-2xl"
            >
              <FaAngleRight />
            </button>
          </div>
          <div
            className="flex h-full w-full transition-transform duration-1000"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {sliderItems.map((item, i) => (
              <div className="relative w-full h-full flex-shrink-0" key={i}>
                <img
                  src={item.image}
                  alt="ing"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute z-20 bottom-4 left-9 top-40 md:left-10 bg-opacity-0 text-black p-4 rounded flex flex-col items-start">
                  <div className="w-1/2 flex  mt-4">
                    <Link
                      to=""
                      className="text-white text-sm bg-green-700 rounded-md p-2 mb-2 inline-block"
                    >
                      From $1.5
                    </Link>
                  </div>
                  <div className="">
                    <h2 className="text-3xl md:text-3xl w-1/2 text-black bg-green-300 px-2 py-2">
                      {item.title}
                    </h2>
                    <p className="mt-2 w-1/2 text-sm text-black bg-green-100   px-2 py-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-1/2 flex  mt-4">
                    <Link
                      to=""
                      className="text-white text-xl bg-orange-400 rounded-md p-2  inline-block"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
