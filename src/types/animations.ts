import { keyframes } from "@mui/system";

// 애니메이션 키프레임 정의
export const slideInTop = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 애니메이션 관련 타입 정의
export interface AnimationState {
  isVisible: boolean;
  duration: number;
  delay: number;
}

export const ANIMATION_CONFIG = {
  slideInTop: {
    duration: 0.8,
    delay: 2400, // 2.4초 (Title 애니메이션 이후)
    easing: "ease-out",
  },
} as const;
