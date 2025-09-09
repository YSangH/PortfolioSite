export interface PersonalInfoItem {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
}

export const personalInfoData: PersonalInfoItem[] = [
  {
    id: "name",
    title: "이름",
    content: "유상현",
    imageSrc: "/assets/name.jpg",
  },
  {
    id: "birth",
    title: "생년월일",
    content: "1994년 1월 29일",
    imageSrc: "/assets/birth.jpg",
  },
  {
    id: "address",
    title: "주소",
    content: "경기도 수원시 권선구",
    imageSrc: "/assets/address.jpg",
  },
  {
    id: "education",
    title: "학력",
    content: "오산대학교(졸업)\n인터넷정보처리과",
    imageSrc: "/assets/education.jpg",
  },
];
