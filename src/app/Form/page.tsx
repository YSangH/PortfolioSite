"use client";

import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Form() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // 기본 이메일 주소
  const email = "ysh940129@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: email, subject, message }),
    });

    const data = await res.json();
    setStatus(
      data.success ? "이메일이 성공적으로 전송되었습니다!" : "전송 실패"
    );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/assets/plane.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Container
          sx={{ backgroundColor: "#ffffff", p: 4, borderRadius: "20px" }}
        >
          <Typography
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#87CEEB",
              height: "50px",
              fontSize: "30px",
              fontWeight: "bold",
              borderRadius: "10px",
              color: "#ffffff",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              lineHeight: "50px",
            }}
          >
            이메일 보내기
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder={email}
              fullWidth
              margin="normal"
              disabled // 이메일 입력란을 비활성화
              InputProps={{
                style: {
                  fontWeight: "bold",
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              label="제목"
              fullWidth
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <TextField
              label="내용"
              fullWidth
              multiline
              rows={6}
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Container
              disableGutters
              maxWidth="sm"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "240px",
                  height: "50px",
                  fontWeight: "bold",
                  backgroundColor: "#87CEEB",
                  fontSize: "20px",
                }}
              >
                보내기
              </Button>
              <Link href={"Contact"}>
                <Button
                  type="button" // 버튼 타입을 'button'으로 변경
                  variant="contained"
                  sx={{
                    width: "240px",
                    height: "50px",
                    fontWeight: "bold",
                    backgroundColor: "#87CEEB",
                    fontSize: "20px",
                  }}
                >
                  뒤로가기
                </Button>
              </Link>
            </Container>
          </form>
          {status && <Typography sx={{ mt: 2 }}>{status}</Typography>}
        </Container>
      </Container>
    </Box>
  );
}
