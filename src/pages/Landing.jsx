// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Subjects from "../component/Courses";
import CourseTab from "../component/CourseTab";
import { popularSubjects } from "../constants/doc";

const Landing = () => {
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);

  const handleSubjectClick = (index) => {
    setSelectedSubjectIndex(index);
  };


  return (
    <div>
      <div className="flex flex-row items-center justify-between h-[100px] bg-secondary px-10 fixed w-full z-10">
        <div className="flex flex-row items-center justify-start gap-20">
          <p className="text-5xl font-extrabold text-white cursor-pointer">LearnHub</p>

          <div className="flex items-center ">
            <div className="relative">
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="pl-10 pr-4 py-4  bg-transparent rounded-xl text-white w-[600px]"
              />
            </div>
          </div>
        </div>

        <div>
          <button className="bg-tertiary text-xl font-semibold text-primary py-4 px-4 rounded-lg">
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex relative top-[180px] mx-20">
        {/* Sidebar */}
        <div className="w-96">
          <Subjects
            subjects={popularSubjects}
            handleSubjectClick={handleSubjectClick}
          />
        </div>

        {/* Main Content */}
        <div className="w-full mx-10">
          <CourseTab
            content={popularSubjects[selectedSubjectIndex]?.content}
            selectedSubject={popularSubjects[selectedSubjectIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
