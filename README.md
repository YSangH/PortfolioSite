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
  ├── assets
  ├── files
- src
  ├── app
  │   ├── api/send-email
  │   │   ├── middleware.ts
  │   │   ├── route.ts
  │   ├── Contact/page.tsx
  │   ├── Form/page.tsx  -  메일 보내기 위한 페이지
  │   ├── Info/page.tsx  -  기본 정보 페이지
  │   ├── Introduce/page.tsx  -  자기 소개 페이지
  │   ├── Portfolio/page.tsx  -  프로젝트 참여 이력 페이지
  │   ├── Skills/page.tsx  -  기술 스택 페이지
  │   ├── favicon.ico  -  파비콘 파일
  │   ├── globals.css  -  프로젝트 전역(Global) 스타일을 정의하는 CSS 파일
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components
  │   ├── Card.tsx
  │   ├── Contents.tsx
  │   ├── DashBoard.tsx
  │   ├── Footer.tsx
  │   ├── Header.tsx
  │   ├── More.tsx
  │   ├── SkillBadge.tsx
  │   ├── Title.tsx
  │   └── Url.tsx
```

