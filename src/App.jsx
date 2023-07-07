// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./pages/Home";
// import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { SubjectProvider } from "./Hooks/SubjectContext";

const App = () => {
  return (
    <>
      <SubjectProvider>
        {/* <Home /> */}
        <Landing />
      </SubjectProvider>
    </>
  );
};

export default App;
