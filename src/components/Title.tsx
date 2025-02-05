import React from "react";
import { Box, Typography } from "@mui/material";

// Props 타입 정의
type TitleProps = {
  titleText: string; // 동적으로 전달할 텍스트
};

const Title: React.FC<TitleProps> = ({ titleText }) => {
  // 색상 배열
  const colors = ["#87CEEB", "#A3D9F7", "#B7E1F8", "#CCEBFC"].reverse();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "15vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* 왼쪽 구체 */}
        {colors.map((color, index) => (
          <Box
            key={`left-${index}`}
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: color,
              margin: index === 0 ? "0 16px 0 15px" : "0 15px",
              animation: `fadeIn 1s ease-in-out ${
                (colors.length - 1 - index) * 0.3
              }s forwards`,
              animationDelay: "1s",
              opacity: 0,
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                  transform: "scale(0.5)",
                },
                "100%": {
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          />
        ))}
        {/* 동적 텍스트 */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            margin: "0 16px",
            color: "black",
            fontSize: "60px",
            animation: "trackingIn 1s ease-in-out forwards",
            "@keyframes trackingIn": {
              "0%": {
                letterSpacing: "-0.5em",
                opacity: 0,
              },
              "50%": {
                opacity: 0.5,
              },
              "100%": {
                letterSpacing: "normal",
                opacity: 1,
              },
            },
          }}
        >
          {titleText}
        </Typography>
        {/* 오른쪽 구체 */}
        {colors.reverse().map((color, index) => (
          <Box
            key={`right-${index}`}
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: color,
              margin: "0 15px",
              animation: `fadeIn 1s ease-in-out ${index * 0.6}s forwards`,
              animationDelay: "1s",
              opacity: 0,
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                  transform: "scale(0.5)",
                },
                "100%": {
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Title;
