# PortfolioSite

나에 대한 정보와 자기 소개 그리고 프로젝트 활동을 알리는 사이트

## 사용 기술

<span style="font-size: 1.5em; font-weight: bold;">Stack</span>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## 폴더 구조
```
- .next
- .vercel
- node_modules
- public
  ├── assets  -  이미지 파일을 모아두는 폴더
  ├── files  -  PDF 등 파일을 모아두는 폴더
- src
  ├── app  -  페이지와 관련된 폴더
  │   ├── api/send-email  -  이메일과 관련된 백엔드 폴더
  │   │   ├── middleware.ts  -  이메일을 보낼 때 짧은 시간에 많이 보내는 것을 방지하는 파일
  │   │   ├── route.ts  -  Form.tsx에서 요청했을 때 알려주는 파일
  │   ├── Contact/page.tsx  -  활동하는 url이 있는 페이지
  │   ├── Form/page.tsx  -  메일 보내기 위한 페이지
  │   ├── Info/page.tsx  -  기본 정보 페이지
  │   ├── Introduce/page.tsx  -  자기 소개 페이지
  │   ├── Portfolio/page.tsx  -  프로젝트 참여 이력 페이지
  │   ├── Skills/page.tsx  -  기술 스택 페이지
  │   ├── favicon.ico  -  파비콘 파일
  │   ├── globals.css  -  프로젝트 전역(Global) 스타일을 정의하는 CSS 파일
  │   ├── layout.tsx  -  Next.js의 루트 레이아웃을 정의하는 파일
  │   └── page.tsx  -  메인 페이지
  ├── components  -  UI와 관련된 컴포넌트 폴더
  │   ├── Card.tsx  -  Info.tsx에서 아이콘과 타이틀, 내용이 있는 컴포넌트
  │   ├── Contents.tsx  -  Introduce.tsx에서 적용되는 컴포넌트
  │   ├── DashBoard.tsx  -  메인페이지에 쓰이는 컴포넌트
  │   ├── Footer.tsx  -  푸터 펌포넌트
  │   ├── Header.tsx  -  헤더 컴포넌트
  │   ├── More.tsx  -  Portfolio.tsx에서 썸네일과 팝업레이어로 보여주는 컴포넌트
  │   ├── SkillBadge.tsx  -  스킬 뱃지 컴포넌트
  │   ├── Title.tsx  -  타이틀 컴포넌트
  │   └── Url.tsx  -  Contact.tsx에서 해당 경로를 보여주기 위해 쓰이는 컴포넌트
```

## 웹 페이지 화면 구성
1. 공통적인 영역
  -  헤더 : 텍스트 로고와 각 페이지로 이동하는 네비게이션 바
  -  푸터 : 제작권과 해당 페이지 개발기반을 알려주는 목적

<br>

2. 메인(page.tsx)
  -  각 나라의 언어별 인사를 전환 그리고 타이핑되는 느낌의 간단한 인사문구

<br>

3. 자기소개(Introduce.tsx)
  -  아코디언 형식으로 각 항목을 보여줌
  -  경력부분에는 팝업 레이어를 적용해 활동한 내용을 열람 가능

<br>

4. 기본정보(Info.tsx)
  -  카드 컴포넌트를 이용해 애니메이션으로 정보를 보여줌

<br>    

5. 기술스택(Badge.tsx)
  -  기본 정보 페이지와 동일하게 컴포넌트로 각 기술 스택을 보여줌

<br>

6. 포트폴리오(Portfoilo.tsx)
  -  팝업 레이어를 이용해 이미지 및 파일로 해당 내용 열람
  -  버튼 이벤트로 깃허브 열람 

<br>

7. 경로(Contact.tsx)
  -  컴포넌트로 활동 경로를 보여주며 버튼이벤트로 각 경로를 이동시켜줌
  -  이메일에 있는 버튼 클릭 시 이메일 작성 페이지(Form.tsx) 전환

<br>

8. 메일 작성(Form.tsx)
  - route.ts를 이용해 메일을 보내고 요청 여부를 알려준다.
  - middleware.ts를 이용해 딜레이를 주어 짧은 시간 내에 메일을 많이 보낼 수 없게 적용

<br>

## 배포 링크
<br>
https://yshdevprofile.vercel.app/
[웹 페이지 주소](https://yshdevprofile.vercel.app/)



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
