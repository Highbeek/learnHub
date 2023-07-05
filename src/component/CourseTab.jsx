// eslint-disable-next-line no-unused-vars
import React from "react";

const CourseTab = () => {
  return (
    <div>
      <div
        className="p-6 bg-green-400 h-[300px] w-full rounded-lg mx-10 "
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-white text-bold text-8xl">Online Classes</p>
        <p className="text-white text-2xl">
          Find what fascinates you as you explore these online classes.
        </p>
        <button className="btn py-2 px-4 rounded-lg text-xl text-bold mt-10">
          Start for Free
        </button>
      </div>
      <div>
        <p>Featured Classes</p>
        
      </div>
    </div>
  );
};

export default CourseTab;
