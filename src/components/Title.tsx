import React from "react";
import { Box, Typography } from "@mui/material";

// Props 타입 정의
type TitleProps = {
  titleText: string; // 동적으로 전달할 텍스트
  id?: string; // 선택적 ID prop
};

const Title: React.FC<TitleProps> = ({ titleText, id }) => {
  // 색상 배열
  const colors = ["#87CEEB", "#A3D9F7", "#B7E1F8", "#CCEBFC"].reverse();

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "2vh", sm: "3vh" },
        minHeight: { xs: "8vh", sm: "10vh", md: "12vh" },
        padding: { xs: "0 16px", sm: "0 24px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
        {/* 왼쪽 구체 */}
        {colors.map((color, index) => (
          <Box
            key={`left-${index}`}
            sx={{
              width: { xs: 20, sm: 25, md: 30 },
              height: { xs: 20, sm: 25, md: 30 },
              borderRadius: "50%",
              backgroundColor: color,
              margin: {
                xs: index === 0 ? "0 8px 0 4px" : "0 4px",
                sm: index === 0 ? "0 12px 0 8px" : "0 8px",
                md: index === 0 ? "0 16px 0 15px" : "0 15px",
              },
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
            margin: {
              xs: "0 8px",
              sm: "0 12px",
              md: "0 16px",
            },
            color: "black",
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "60px",
            },
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: { xs: "200px", sm: "300px", md: "400px", lg: "none" },
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
              width: { xs: 20, sm: 25, md: 30 },
              height: { xs: 20, sm: 25, md: 30 },
              borderRadius: "50%",
              backgroundColor: color,
              margin: {
                xs: "0 4px",
                sm: "0 8px",
                md: "0 15px",
              },
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
