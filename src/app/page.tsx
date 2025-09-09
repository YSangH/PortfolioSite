"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Info from "./Info/page";
import Introduce from "./Introduce/page";
import Skills from "./Skills/page";
import Portfolio from "./Portfolio/page";
import Contact from "./Contact/page";

export default function Home() {
  useEffect(() => {
    // 페이지 로드 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
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
