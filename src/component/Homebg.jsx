// eslint-disable-next-line no-unused-vars
import React from "react";
import { bgPic } from "../constants/doc";
import JoinLearnHub from "./JoinLearnHub";

const Homebg = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-4 gap-0">
        {/* Images 1 and 5 */}
        <div className="col-span-1 row-span-6 h-800px">
          <img src={bgPic[2]} alt="Image 1" className="h-2/3 object-cover" />
          <img
            src={bgPic[4]}
            alt="Image 5"
            className="h-[490px] w-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <img src={bgPic[1]} alt="Image 2" className="col-span-1 object-cover" />

        {/* Image 3 */}
        <img
          src={bgPic[0]}
          alt="Image 3"
          className="col-span-1 h-200px object-cover"
        />

        {/* Images 4 and 8 */}
        <div className="col-span-1 row-span-6 h-1200px">
          <img src={bgPic[3]} alt="Image 4" className="h-2/3 object-cover" />
          <img
            src={bgPic[7]}
            alt="Image 8"
            className="h-[490px] w-full object-cover"
          />
        </div>

        {/* Middle component */}
        <div className="col-span-2 row-span-3 flex items-center justify-center">
          <div className="bg-white w-full h-screen items-center justify-center">
            <JoinLearnHub />
          </div>
        </div>

        {/* Image 6 */}
        {/* <img
          src={bgPic[5]}
          alt="Image 6"
          className="col-span-1 h-200px object-cover"
        /> */}

        {/* Image 7 */}
        {/* <img
          src={bgPic[6]}
          alt="Image 7"
          className="col-span-1 h-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Homebg;
