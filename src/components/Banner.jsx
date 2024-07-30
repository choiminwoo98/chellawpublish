import React from "react";

const BannerSlide = () => {
  return (
    <div className="relative inline-block w-full">
      <img
        src={process.env.PUBLIC_URL + "/assets/banner1.png"}
        alt="이미지 설명"
        className="block w-full"
      />

      <div className="absolute flex items-center top-1/2 left-2 transform -translate-y-1/2 bg-opacity-50 text-white border-none mx-40 my-[70px] cursor-pointer gap-2">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: "50" }}></div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "/assets/leftArrow.png"}
          alt="이미지 설명"
          className="block"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/pause.png"}
          alt="이미지 설명"
          className="block w-2 h-3"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/rightArrow.png"}
          alt="이미지 설명"
          className="block"
        />
      </div>
    </div>
  );
};

export default BannerSlide;
