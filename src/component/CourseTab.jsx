// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SubjectContext } from "../Hooks/SubjectContext";
import VideoList from "./Videos";

const CourseTab = ({ content }) => {
  const { selectedSubject } = useContext(SubjectContext);
  const [backgroundImage, setBackgroundImage] = useState(
    'url("https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
  );

  useEffect(() => {
    if (selectedSubject && selectedSubject.bg) {
      setBackgroundImage(`url("${selectedSubject.bg}")`);
    } else {
      setBackgroundImage(
        'url("https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
      );
    }
  }, [selectedSubject]);

  return (
    <div>
      <div
        className="p-6 bg-green-400 h-[300px] w-full rounded-lg mx-10"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
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


      <div className="mt-10 mx-10">
        <VideoList category="Featured" />
      </div>

  
    </div>
  );
};

CourseTab.propTypes = {
  content: PropTypes.string,
};

export default CourseTab;
