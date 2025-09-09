import { useState, useEffect } from "react";
import { ANIMATION_CONFIG } from "@/types/animations";

/**
 * 애니메이션 상태를 관리하는 커스텀 훅
 * @param delay 애니메이션 시작 지연 시간 (기본값: slideInTop 설정값)
 * @returns 애니메이션 표시 여부 상태
 */
export const useAnimation = (delay: number = ANIMATION_CONFIG.slideInTop.delay) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};
