"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import { CardContent } from "@mui/material";

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

interface TextBoxProps {
  title: string;
  content: string;
}

export default function TextBox({ title, content }: TextBoxProps) {
  const [isVisible, setIsVisible] = React.useState(false);

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
        minWidth: 1020,
        minHeight: 170,
        animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
        display: isVisible ? "flex" : "none", // Flexbox 적용
        alignItems: "center", // 세로 정렬
        padding: 3, // 내부 패딩 추가
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", // 전 방향 그림자
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Card
          sx={{
            padding: 2,
            minWidth: 120,
            width: 180,
            height: 50,
            display: "block",
            alignItems: "center",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", // 전 방향 그림자
            borderRadius: "10px",
            backgroundColor: "#87CEEB",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center",
              lineHeight: "20px",
            }}
          >
            {title}
          </Typography>
        </Card>
        <Typography
          variant="body2"
          sx={{
            marginTop: "5vh",
            fontSize: "18px",
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
