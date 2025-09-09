"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 11,
          width: "100%",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#87CEEB",
          color: "#ffffff",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
          marginTop: "auto",
        }}
      >
        <Container
          sx={{
            textAlign: "center",
            paddingTop: { xs: "8px", sm: "5px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "0.5rem",
                sm: "0.55rem",
                md: "0.6rem",
                lg: "0.65rem",
              },
              letterSpacing: { xs: "1px", sm: "2px", md: "3px", lg: "4px" },
              fontWeight: "700",
              marginBottom: { xs: "4px", sm: "2px" },
              whiteSpace: "normal",
              lineHeight: 1.5,
              wordBreak: "keep-all",
            }}
          >
            ⓒ Copyright 2025. YuSangHyeon all rights reserved.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "0.5rem",
                sm: "0.55rem",
                md: "0.6rem",
                lg: "0.65rem",
              },
              letterSpacing: { xs: "0.5px", sm: "1px", md: "1.5px", lg: "2px" },
              fontWeight: "bold",
              marginBottom: "2px",
              whiteSpace: "normal",
              lineHeight: 1.5,
              wordBreak: "keep-all",
            }}
          >
            Next.js, Material UI 기반으로 제작된 사이트입니다.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
