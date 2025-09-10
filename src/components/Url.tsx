"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import Link from "next/link";
import { Box } from "@mui/material";

// slide-in-top 애니메이션 정의
const slideInTop = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// hover 애니메이션 정의
const hoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

interface ContactCardProps {
  title: string;
  content: string;
  imageSrc: string;
  url: string;
  description?: string;
}

export default function ContactCard({
  title,
  content,
  imageSrc,
  url,
  description,
}: ContactCardProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 애니메이션 지연 시간 단축
    return () => clearTimeout(timer);
  }, []);

  const isExternalLink = url.startsWith("http");

  return (
    <Link 
      href={url} 
      passHref
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          height: { xs: 180, sm: 200, md: 220 },
          animation: isVisible ? `${slideInTop} 0.6s ease-out` : `none`,
          display: isVisible ? "flex" : "none",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          padding: { xs: 2, sm: 3 },
          boxShadow: isHovered 
            ? "0 8px 25px rgba(0, 0, 0, 0.15)" 
            : "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            animation: `${hoverScale} 0.3s ease-in-out forwards`,
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* 아이콘 이미지 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { xs: 0, sm: 2 },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 40, sm: 50, md: 60 },
            width: { xs: 40, sm: 50, md: 60 },
            objectFit: "contain",
            borderRadius: "8px",
          }}
          image={imageSrc}
          alt={`${title} 아이콘`}
        />
      </Box>

      {/* 텍스트 + 버튼 영역 */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: "8px", sm: "16px" },
          "&:last-child": {
            paddingBottom: { xs: "8px", sm: "16px" },
          },
        }}
      >
        {/* 제목 */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            fontWeight: 700,
            color: "text.primary",
            marginBottom: 1,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        {/* 내용 */}
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "text.secondary",
            fontWeight: 500,
            marginBottom: 2,
            lineHeight: 1.4,
            wordBreak: "break-all",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>

        {/* 설명 (있는 경우) */}
        {description && (
          <Typography
            variant="caption"
            sx={{
              fontSize: "12px",
              color: "text.disabled",
              marginBottom: 2,
              fontStyle: "italic",
            }}
          >
            {description}
          </Typography>
        )}

        {/* 클릭 안내 텍스트 */}
        <Typography
          variant="caption"
          sx={{
            fontSize: "12px",
            color: "#87CEEB",
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          {isExternalLink ? "클릭하여 이동" : "클릭하여 문의"}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
