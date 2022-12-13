import React from "react";
import { FaBook, FaCalendarDay } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Resume() {
  return (
    <div className="w-full bg-bgColor p-[15px] mb-12" name="skills">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center space-y-[20px]">
          <h1 className="text-primary text-[32px]">SKILLS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full gap-[50px] py-[20px] max-w-[1000px]">
          <div className="flex flex-col justify-center items-center gap-3">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={15} text={"15%"} />
            </div>
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={25} text={"25%"} />
            </div>
            <p>JAVASCRIPT</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={50} text={"50%"} />
            </div>
            <p>JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
