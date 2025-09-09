"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import { ANIMATION_DELAYS, GRID_CONFIG } from "@/constants/animations";

// slide-in-top 애니메이션 정의
const slideInTop = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface BadgeProps {
  title: string;
  skillImg: string;
  backgroundColor?: string;
}

// 스타일 객체 분리
const styles = {
  card: (isVisible: boolean, backgroundColor?: string) => ({
    minWidth: GRID_CONFIG.CARD.MIN_WIDTH,
    maxWidth: GRID_CONFIG.CARD.MAX_WIDTH,
    height: GRID_CONFIG.CARD.HEIGHT,
    animation: isVisible ? `${slideInTop} ${ANIMATION_DELAYS.SKILL_BADGE_DURATION}ms ease-out` : 'none',
    display: isVisible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    backgroundColor: backgroundColor,
    transition: "transform 0.2s ease-in-out",
    '&:hover': {
      transform: "scale(1.05)",
    },
  }),
  cardMedia: {
    height: 40,
    width: 40,
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    marginLeft: 1,
  },
  cardContent: {
    height: 45,
    flexGrow: 1,
    display: "flex",
    flexDirection: "inherit" as const,
    justifyContent: "center",
    padding: "1px !important",
  },
  typography: {
    height: 45,
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center" as const,
  },
} as const;

export default function SkillBadge({
  title,
  skillImg,
  backgroundColor,
}: BadgeProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  // 애니메이션 타이머 설정
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, ANIMATION_DELAYS.SKILL_BADGE_DELAY);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card sx={styles.card(isVisible, backgroundColor)}>
      {/* 아이콘 이미지 */}
      <CardMedia
        sx={styles.cardMedia}
        image={skillImg}
        title={`${title} skill icon`}
      />

      {/* 텍스트 영역 */}
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.typography}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
