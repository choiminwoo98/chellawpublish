import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-40">
      <div className="flex justify-end gap-4 items-center h-12 ">
        <div className="flex gap-2 ">
          <div className="border-r border-gray-300 pr-2">내 소장</div>
          <div className="border-r border-gray-300 pr-2">로그 아웃</div>
          <div className="pr-2 flex items-center gap-1">
            <p>홍길동 님</p>
            <img
              src={process.env.PUBLIC_URL + "/assets/bell.png"}
              alt="이미지 설명"
              className="w-4 h-5  aspect-square"
            />
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/language.png"}
            alt="이미지 설명"
            className="w-4 h-4 aspect-square"
          />
          <select>
            <option>한국어</option>
            <option>영어</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link to={"/"} className="cursor-pointer">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="이미지 설명"
          />
        </Link>
        <div className="flex gap-[50px] py-6 items-center">
          <nav className="flex gap-10">
            <Link to={"/write"}>소장 작성</Link>
            <Link to={"/introduction"}>첼로소개</Link>
            <Link to={"/customersupport"}>고객지원</Link>
            <Link to={"/mypge"}>마이 페이지</Link>
          </nav>
          <div>검색어를 입력하세요</div>
          <img
            src={process.env.PUBLIC_URL + "/assets/menu.png"}
            alt="이미지 설명"
            className="w-4 h-4 aspect-square"
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default Header;
