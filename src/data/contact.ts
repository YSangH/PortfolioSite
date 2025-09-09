// 연락처 정보 타입 정의
export interface ContactInfo {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  url: string;
  description?: string;
}

// 연락처 정보 상수
export const CONTACT_INFO: ContactInfo[] = [
  {
    id: "email",
    title: "Email",
    content: "ysh940129@gmail.com",
    imageSrc: "/assets/gmail.png",
    url: "/Form",
    description: "이메일로 문의하기"
  },
  {
    id: "github",
    title: "Github",
    content: "https://github.com/YSangH",
    imageSrc: "/assets/github.png",
    url: "https://github.com/YSangH",
    description: "GitHub 프로필 보기"
  },
  {
    id: "blog",
    title: "Blog",
    content: "https://ysh0129.tistory.com",
    imageSrc: "/assets/tistory.png",
    url: "https://ysh0129.tistory.com",
    description: "개발 블로그 방문하기"
  }
];
