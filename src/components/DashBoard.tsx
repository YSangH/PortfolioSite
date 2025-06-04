"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const greetings = [
  "Hello",
  "こんにちは",
  "你好",
  "здравствуйте",
  "Hola",
  "Bonjour",
  "xin chào",
  "guten Tag",
  "buongiorno",
  "สวัสดีครับ",
  "नमस्ते",
  "안녕하세요",
];

export default function DashBoard() {
  const [currentGreeting, setCurrentGreeting] = React.useState<string | null>(
    null
  );
  const [animationEnded, setAnimationEnded] = React.useState(false);
  const [typedText, setTypedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;

    const initialTimeout = setTimeout(() => {
      setCurrentGreeting(greetings[0]);

      const interval = setInterval(() => {
        index += 1;

        if (index === greetings.length) {
          clearInterval(interval);
          setAnimationEnded(true);
        } else {
          setCurrentGreeting(greetings[index]);
        }
      }, 200);
    }, 600);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  React.useEffect(() => {
    if (animationEnded) {
      const text = " 주니어 프론트엔드 개발자 유상현 입니다.";
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        setTypedText((prev) => {
          return (prev ?? "") + text[charIndex];
        });
        charIndex += 1;

        if (charIndex >= text.length) {
          clearInterval(typingInterval);
          setTypedText(text);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [animationEnded]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ bgcolor: "#ffffff" }}>
        <Box
          sx={{
            bgcolor: "#ffffff",
            minHeight: "60vh", // 고정 height 대신 최소 높이 설정
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            margin: { xs: "5vh 5vw", md: "10vh 10vw" },
            textAlign: "center", // 모바일에서 텍스트 중앙 정렬
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              float: "left",
              fontWeight: "bold",
              fontSize: { xs: "30px", sm: "40px", md: "60px" }, // 반응형 폰트 크기
            }}
          >
            {currentGreeting || ""}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "30px" }, // 반응형 텍스트 크기
              marginTop: "20px",
            }}
          >
            {typedText || ""}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
