import React from "react";

const mockData = {
  data: [
    {
      title: "대여금 청구의 소",
    },
  ],
};
const EditDescription = () => {
  return (
    <div className="max-w-[1300px] flex flex-col items-center  w-full px-40 h-[832px]">
      <div className="w-full bg-white h-[263px] shadow-lg rounded-[20px] relative bottom-[130px] py-10 px-10">
        here
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4">
          <div className="font-bold">
            <p className="text-5xl leading-snug">법률지식 없이도</p>
            <p className="text-5xl leading-snug text-[#21b6bf]">
              쉽게 작성하는 소장
            </p>
          </div>
          <p className="text-[#778383]">
            누구나 쉽게 벌률 문제를 보다 효율적이고 효과적으로 해결할 수 있는
            <br />
            혁신적인 법률 서비스 첼로를 경험해보세요!
          </p>
          <div className="flex justify-start text-[#21b6bf] pt-5 ">
            <div className="flex border-[1px] py-[18px] px-[31px] font-bold items-center gap-3 rounded-full border-[#21b6bf]">
              소장 작성하러 가기
              <img
                src={process.env.PUBLIC_URL + "/assets/upRightArrow.png"}
                alt="이미지 설명"
                className=" w-4 h-4"
              />
            </div>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/assets/exampleImage.png"}
          alt="이미지 설명"
          className="w-[759px] h-[420px]"
        />
      </div>
    </div>
  );
};

export default EditDescription;
