// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { popularSubjects } from "../constants/doc";

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState(popularSubjects[0]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <SubjectContext.Provider value={{ selectedSubject, handleSubjectClick }}>
      {children}
    </SubjectContext.Provider>
  );
};

SubjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
