"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "next/link";

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
  url: string;
}

export default function InfoCard({
  title,
  content,
  imageSrc,
  url,
}: InfoCardProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      sx={{
        minWidth: 372,
        height: 200,
        animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        padding: 3,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "15px",
      }}
    >
      {/* 아이콘 이미지 */}
      <CardMedia
        sx={{
          height: 50,
          width: 50,
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          marginLeft: 1,
        }}
        image={imageSrc}
        title="contactIcons"
      />

      {/* 텍스트 + 버튼 영역 */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 모든 요소를 가운데 정렬
          position: "relative", // 버튼을 아래로 밀기 위한 기준점
        }}
      >
        {/* 텍스트 컨테이너 (위쪽 고정) */}
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          {content}
        </Typography>

        <Link href={url}>
          <Button
            sx={{
              position: "absolute",
              bottom: -30, // 아래 여백 추가
              right: -5,
              width: "100px",
              height: "35px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              fontWeight: "500",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography>More</Typography>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
