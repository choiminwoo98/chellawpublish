import React, { useState } from "react";

const HelpDesk = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed flex gap-[18px] justify-center items-center bottom-4 right-4 border-2 font-bold rounded-full p-[18px] shadow-lg">
      <p>변호사 신청</p>
      <img src={process.env.PUBLIC_URL + "/assets/law.png"} alt="이미지 설명" />
    </div>
  );
};

export default HelpDesk;
