import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300) {
        console.log("1");
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // 초기 크기 설정
    handleResize();

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
