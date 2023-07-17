// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SubjectContext } from "../Hooks/SubjectContext";

const Subjects = ({ subjects }) => {
  const { handleSubjectClick, selectedSubject } = useContext(SubjectContext);

  const handleClick = (subject) => {
    handleSubjectClick(subject);
  };

  return (
    <div>
     
      <div>
        {subjects.map((subject, index) => (
          <div key={index}>
            <p
              className={`cursor-pointer py-4 text-bold text-lg ${
                selectedSubject === subject
                  ? "bg-secondary rounded-xl text-white"
                  : ""
              }`}
              onClick={() => handleClick(subject)}
            >
              {subject.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Subjects.propTypes = {
  subjects: PropTypes.array.isRequired,
};

export default Subjects;
