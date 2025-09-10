export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  githubLink: string;
  pptFile?: string;
  images: {
    image1: string;
    image2: string;
  };
  subtitles: {
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
  };
}

export const portfolioProjects: Project[] = [
  {
    id: "citychat",
    name: "CityChat",
    description: "3인 제작 실용적이고 신뢰도 높은 풍부한 도시 정보를 제공하는 사이트입니다.",
    mainImage: "",
    githubLink: "https://github.com/FRONT-END-BOOTCAMP-PLUS-5/citychat",
    images: {
      image1: "",
      image2: "",
    },
    subtitles: {
      subtitle1: "메인 페이지",
      subtitle2: "",
      subtitle3: "",
    },
  },
  {
    id: "portfolio-website",
    name: "개발자 포트폴리오 홈페이지",
    description:
      "Next.js와 materialUI를 이용하여 제작한 개발자 홈페이지 입니다.",
    mainImage: "/assets/devmain.gif",
    githubLink: "https://github.com/YSangH/PortfolioSite",
    images: {
      image1: "/assets/devinfo.gif",
      image2: "/assets/devskills.gif",
    },
    subtitles: {
      subtitle1: "메인 페이지",
      subtitle2: "정보 페이지",
      subtitle3: "기술스택 페이지",
    },
  },
  {
    id: "lottery-generator",
    name: "복권번호 추첨기",
    description: "2인 SideProject입니다.",
    mainImage: "/assets/lottomain.png",
    githubLink: "https://github.com/BTBIIT/lottery",
    images: {
      image1: "/assets/animation.gif",
      image2: "/assets/single.gif",
    },
    subtitles: {
      subtitle1: "추첨기 페이지",
      subtitle2: "추첨 애니메이션",
      subtitle3: "1회 추첨 출력결과",
    },
  },
  {
    id: "zoom-clone",
    name: "Zoom Clone Coding",
    description:
      "React와 ZegoCloud, Firebase를 이용한 Zoom 화상채팅 클론코딩입니다.",
    mainImage: "/assets/zoommain.png",
    githubLink: "https://github.com/YSangH/zoomclone",
    images: {
      image1: "/assets/dashboard.png",
      image2: "/assets/room.png",
    },
    subtitles: {
      subtitle1: "메인 페이지",
      subtitle2: "대시보드 페이지",
      subtitle3: "대기방 페이지",
    },
  },
  {
    id: "accommodation-platform",
    name: "숙박업소 플랫폼",
    description:
      "자바기반 풀스택 웹 개발자 실무 양성과정 4인 FinalProject입니다.",
    mainImage: "/assets/finalmain.png",
    githubLink: "https://github.com/JaydenKim0528/StayWithMe",
    pptFile: "/files/finalProject.pdf",
    images: {
      image1: "/assets/list.png",
      image2: "/assets/detail.png",
    },
    subtitles: {
      subtitle1: "메인 페이지",
      subtitle2: "리스트 페이지",
      subtitle3: "상세 페이지",
    },
  },
  {
    id: "business-platform",
    name: "비즈니스 플랫폼",
    description:
      "자바기반 풀스택 웹 개발자 실무 양성과정 4인 SemiProject입니다.",
    mainImage: "/assets/semimain.png",
    githubLink: "https://github.com/zzooong2/TeamProject_Copang",
    pptFile: "/files/semiProject.pdf",
    images: {
      image1: "/assets/semimain2.png",
      image2: "/assets/category.png",
    },
    subtitles: {
      subtitle1: "메인 페이지(1)",
      subtitle2: "메인 페이지(2)",
      subtitle3: "카테고리 페이지",
    },
  },
];
