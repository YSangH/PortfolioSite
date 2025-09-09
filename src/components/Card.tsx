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

interface InfoCardProps {
  title: string;
  content: string;
  imageSrc: string;
}

export default function InfoCard({ title, content, imageSrc }: InfoCardProps) {
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
        // minWidth, maxWidth 제거: 부모 그리드(Info.tsx)에서 너비를 조절하므로 Card는 100%를 차지하도록
        // minWidth: 350,
        // maxWidth: 690,
        width: "100%", // 그리드 셀의 너비를 꽉 채우도록 설정

        // 높이도 반응형으로 조절: 작은 화면에서 세로로 쌓일 때 높이 확보
        minHeight: { xs: 180, sm: 140 }, // xs: 480px 이하, sm: 600px 이상
        maxHeight: { xs: "auto", sm: 170 }, // 작은 화면에서는 높이 자동 조절, 큰 화면에서는 최대 높이

        animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
        display: isVisible ? "flex" : "none",

        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" }, // column일 때 세로 중앙 정렬, row일 때 시작 정렬

        // 패딩도 반응형으로 조절
        padding: { xs: 2, sm: 3 },
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "15px",
      }}
    >
      {/* 아이콘 이미지 */}
      <CardMedia
        sx={{
          height: { xs: 80, sm: 100 },
          width: { xs: 80, sm: 100 },
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          marginLeft: { xs: 0, sm: 8 },
          marginBottom: { xs: 2, sm: 0 },
        }}
        image={imageSrc}
        title="InfoIcons"
      />

      {/* 텍스트 영역 */}
      <CardContent
        sx={{
          flexGrow: 1, 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginRight: { xs: 0, sm: 6 },
          padding: { xs: "8px 0", sm: "16px" },
          "&:last-child": {
            paddingBottom: { xs: "8px !important", sm: "16px !important" },
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontSize: { xs: "20px", sm: "25px" },
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "18px", sm: "22px" },
            textAlign: "center",
            color: "text.secondary",
            fontWeight: "bold",
            whiteSpace: "pre-line", // 개행 문자(\n) 적용
            display: "flex",
            justifyContent: "center",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
