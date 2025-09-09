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
  const [currentGreeting, setCurrentGreeting] = React.useState<string>(
    greetings[0] // 초기값을 첫 번째 인사말로 설정
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
    }, 100); // 초기 지연 시간을 600ms에서 100ms로 단축

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
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            // 480px 이하에서는 이 마진 값이 적용
            margin: { xs: "5vh 5vw", md: "10vh 10vw" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              float: "left",
              fontWeight: "bold",
              fontSize: { xs: "30px", sm: "40px", md: "60px" },
            }}
          >
            {currentGreeting || ""}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
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
