"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          backgroundColor: "#87CEEB",
          color: "#ffffff",
          position: "fixed",
          zIndex: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container sx={{ textAlign: "center", paddingTop: "2vh" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", letterSpacing: "4px", fontWeight: "bold" }}
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
