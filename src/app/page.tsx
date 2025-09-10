"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// 클라이언트 사이드에서만 렌더링되도록 dynamic import 사용
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const DashBoard = dynamic(() => import("@/components/DashBoard"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Info = dynamic(() => import("./Info/page"), { ssr: false });
const Introduce = dynamic(() => import("./Introduce/page"), { ssr: false });
const Skills = dynamic(() => import("./Skills/page"), { ssr: false });
const Portfolio = dynamic(() => import("./Portfolio/page"), { ssr: false });
const Contact = dynamic(() => import("./Contact/page"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      // 페이지 로드 시 즉시 스크롤을 맨 위로 이동 (애니메이션 없이)
      window.scrollTo(0, 0);
      
      // 로딩 완료 후 부드러운 스크롤 활성화
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div>
      <Header />
      <DashBoard />
      <Info />
      <Introduce />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
