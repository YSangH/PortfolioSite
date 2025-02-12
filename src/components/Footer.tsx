"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          minWidth: "600px",
          width: "100%",
          minHeight: "25px",
          height: "10vh",
          backgroundColor: "#87CEEB",
          color: "#ffffff",
          position: "fixed",
          zIndex: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          bottom: 0, // 아래에 고정
        }}
      >
        <Container sx={{ textAlign: "center", paddingTop: "10px" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              letterSpacing: "4px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            ⓒ Copyright 2025. YuSangHyeon all rights reserved.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", letterSpacing: "2px", fontWeight: "bold" }}
          >
            Next.js, Material UI 기반으로 제작된 사이트입니다.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
