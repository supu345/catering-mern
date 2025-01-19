import React from "react";

const Gallery = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container py-[80px] grid grid-cols-1 md:grid-cols-2  gap-[40px] mt-8">
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/916416/pexels-photo-916416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 1"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/20821498/pexels-photo-20821498/free-photo-of-a-cake-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 2"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/13983273/pexels-photo-13983273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 3"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/8886995/pexels-photo-8886995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 4"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/30183073/pexels-photo-30183073/free-photo-of-vibrant-indian-street-food-market-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 3"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.pexels.com/photos/18488302/pexels-photo-18488302/free-photo-of-traditional-indian-sweets-motichoor-laddoo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
            alt="Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
