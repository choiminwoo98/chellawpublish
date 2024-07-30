import React from "react";

const Header = () => {
  return (
    <div className=" px-40">
      <div className="flex justify-end gap-4">
        <div className="flex gap-2">
          <div className="border-r border-gray-300 pr-2">내 소장</div>
          <div className="border-r border-gray-300 pr-2">로그 아웃</div>
          <div className="pr-2">홍길동 님</div>
        </div>
        <div>언어 +</div>
      </div>
      <div className="flex justify-between items-center">
        <div>logo</div>
        <div className="flex gap-2 py-6">
          <div>소장 작성</div>
          <div>첼로소개</div>
          <div>고객지원</div>
          <div>마이 페이지</div>
          <div>검색어를 입력하세요</div>
          <div>menu 아이콘</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
