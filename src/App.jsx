import React from "react";
import { useState, useLayoutEffect, useRef } from "react";
import {
  UilHome,
  UilAlignJustify,
  UilSave,
  UilCropAltRotateRight,
  UilAdjustHalf,
  UilAngleRightB,
} from "@iconscout/react-unicons";

function App() {
  const [rotate, setRotate] = useState("row");
  const ref = useRef(null);
  const [widthOut, setWidth] = useState(0);
  const [heightOut, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  let getOutHeightWidth = () => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  };

  let Run = () => {
    let input = document.querySelector("textarea").value;
    let outputDiv = document.querySelector("#outputDiv");
    outputDiv.innerHTML = input;
  };

  return (
    <div className="w-screen h-screen  bg-gray-600/15 overflow-hidden ">
      <div className="w-screen h-14 flex justify-between">
        <div className="flex w-4/12 h-full items-center content-evenly justify-between ml-2 cursor-pointer">
          <UilHome className="w-12 h-auto text-gray-600 cursor-pointer hover:bg-gray-600/20 hover:h-14" />
          <UilAlignJustify className="w-12 h-auto text-gray-600 cursor-pointer hover:bg-gray-600/20 hover:h-14" />
          <UilSave className="w-12 h-auto text-gray-600 cursor-pointer hover:bg-gray-600/20 hover:h-14" />
          <UilCropAltRotateRight
            className="w-12 h-auto text-gray-600 cursor-pointer hover:bg-gray-600/20 hover:h-14"
            onClick={async () => {
              if (rotate == "row") {
                await setRotate("column");
              } else {
                await setRotate("row");
              }
              getOutHeightWidth();
            }}
          />
          <UilAdjustHalf className="w-12 h-auto text-gray-600 cursor-pointer hover:bg-gray-600/20 hover:h-14" />
          <button
            onClick={() => {
              Run();
            }}
            className="bg-green-600 h-12 w-32 rounded flex justify-center items-center text-white text-xl hover:bg-green-500"
          >
            Run <UilAngleRightB className="w-8 h-auto text-white" />
          </button>
        </div>
        <div className="w-4/12 h-14  flex justify-center items-center">
          Result Size: {widthOut} x {heightOut}
        </div>
      </div>
      <div
        className={` ${
          rotate == "row"
            ? "flex flex-row justify-around w-screen h-full"
            : "flex flex-col  items-center w-screen h-full"
        } `}
      >
        <textarea
          type="text"
          className={`${
            rotate == "row"
              ? "bg-white w-6/12 mx-2 mb-16 shadow-lg border-r-2 border-b-2 border-l-2 border-black/20 px-2 py-1"
              : "bg-white w-special h-80 shadow-lg border-r-2 border-b-2 border-l-2 border-black/20 px-2 py-1 mb-4"
          } align-text-top  `}
        />
        <div
          ref={ref}
          className={` ${
            rotate == "row"
              ? "bg-white w-6/12 mx-2 mb-16 shadow-lg border-r-2 border-b-2 border-l-2 border-black/20 px-2 py-1"
              : "bg-white w-special h-96 shadow-lg border-r-2 border-b-2 border-l-2 border-black/20 px-2 py-1"
          } `}
          id="outputDiv"
        ></div>
      </div>
    </div>
  );
}

export default App;
