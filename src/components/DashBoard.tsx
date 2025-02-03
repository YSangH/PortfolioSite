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
      setCurrentGreeting(greetings[0]); // 0.1초 뒤 첫 인사말 표시

      const interval = setInterval(() => {
        index += 1;

        if (index === greetings.length) {
          clearInterval(interval);
          setAnimationEnded(true); // 애니메이션 종료
        } else {
          setCurrentGreeting(greetings[index]);
        }
      }, 200); // 0.2초 간격으로 인사말 변경
    }, 600); // 처음 0.6초 동안 비어 있음

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
          const updatedText = (prev ?? "") + text[charIndex];
          console.log("Updated Text:", updatedText); // 디버깅
          return updatedText;
        });
        charIndex += 1;

        if (charIndex >= text.length) {
          clearInterval(typingInterval);
          setTypedText(text); // 최종 텍스트 강제 설정
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [animationEnded]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#ffffff",
            height: "80vh",
            marginTop: "10vh",
            padding: "20vh",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "60px" }}
          >
            {currentGreeting || ""} {/* null일 경우 빈 문자열 */}
          </Typography>
          <p style={{ fontSize: "30px", marginTop: "50px" }}>
            {typedText || ""}
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
