"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

// slide-in-top 애니메이션 정의
const slideInTop = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface BadgeProps {
  title: string;
  skillImg: string;
  backgroundColor?: string;
}

export default function SkillBadge({
  title,
  skillImg,
  backgroundColor,
}: BadgeProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  // 해당 애니메이션 타이머 지정
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2400); // 애니메이션 시작 지연 시간과 일치하도록 설정
    // 2400 = 2.4초로 설정한 이유 : Title.tsx의 애니메이션 시간 이후 동작하게 하기 위해서
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      sx={{
        minWidth: 100,
        maxWidth: 250,
        height: 60,
        animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
        display: isVisible ? "flex" : "none", // Flexbox 적용
        alignItems: "center", // 세로 정렬
        padding: 2, // 내부 패딩 추가
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", // 전 방향 그림자
        borderRadius: "10px",
        backgroundColor: backgroundColor,
      }}
    >
      {/* 아이콘 이미지 */}
      <CardMedia
        sx={{
          height: 40,
          width: 40,
          flexShrink: 0, // 크기 유지
          display: "flex",
          justifyContent: "center",
          marginLeft: 1,
        }}
        image={skillImg}
        title="SkillImage"
      />

      {/* 텍스트 영역 */}
      <CardContent
        sx={{
          height: 45,
          flexGrow: 1, // 남은 공간 차지
          display: "flex",
          flexDirection: "inherit",
          justifyContent: "center",
          padding: "1px !important",
        }}
      >
        <Typography
          sx={{
            height: 45,
            fontSize: "30px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
