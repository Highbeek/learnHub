// eslint-disable-next-line no-unused-vars
import React from "react";
import { popularSubjects } from "../constants/doc";

const Subjects = () => {
  return (
    <div>
      <p className="text-black text-2xl font-semibold">All Subjects</p>
     
      <div>
        {popularSubjects.map((item, index) => (
          <div key={index}>
            <p className="cursor-pointer py-4 text-bold text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
