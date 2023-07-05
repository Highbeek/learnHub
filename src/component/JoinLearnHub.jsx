// eslint-disable-next-line no-unused-vars
import React from "react";
import { FcGoogle } from "react-icons/fc";

const JoinLearnHub = () => {
  return (
    <div className="h-full">
      <div className="text-5xl font-extrabold text-center text-primary p-10">
        Empower your learning journey with our platform&apos;s comprehensive
        collection of educational links. Fuel your thirst for knowledge with
        just a click.
      </div>
      <div className="flex justify-center">
        <button className="text-black flex items-center text-2xl font-bold px-4 py-6 border rounded-2xl gap-5">
          <FcGoogle className="mr-2" /> Google
        </button>
      </div>

      <div className="flex flex-col my-10 mx-32 ">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-6 mr-2 mb-10 border border-gray-300 bg-white rounded-2xl"
        />

        <button className="px-4 py-6 text-black bg-secondary rounded-2xl text-2xl font-black">
          Start Learning
        </button>
      </div>
      <div>
        By signing up you agree to LearnShare&apos;s Terms of Service and
        Privacy Policy,
      </div>
    </div>
  );
};

export default JoinLearnHub;
