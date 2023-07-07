// eslint-disable-next-line no-unused-vars
import React from "react";
import Homebg from "../component/Homebg";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Homebg />
      </div>

      <h1 className="absolute top-0 text-5xl font-extrabold text-white">
        LearnHub
      </h1>
    </div>
  );
};

export default Home;
