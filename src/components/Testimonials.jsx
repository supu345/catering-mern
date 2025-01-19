import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Emily Johnson",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Michael Smith",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sophia Lee",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Daniel Kim",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Emma Brown",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
  ];

  return (
    <div id="testimonials" className="py-10  relative">
      {/* <h1 className="text-center text-2xl lg:text-4xl font-bold">
        What Our Customers Say
      </h1> */}
      <div className="max-w-6xl mx-auto py-10 ">
        <Swiper
          style={{
            "--swiper-pagination-color": "#00C400",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-200 shadow-lg rounded-lg flex flex-col p-4">
                <div>
                  <img
                    src={item.image}
                    alt="img"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 text-lg ">
                    {item.name}
                  </h3>
                  <p className="text-sm mt-1">CEO, Webelite Builders</p>
                </div>

                <p className="py-3 text-gray-700 dark:text-white">
                  {item.text}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          index < item.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <Quote className="text-green-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination dots container */}
        <div className="swiper-pagination my-10 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Testimonials;
