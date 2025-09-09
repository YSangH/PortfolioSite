// 애니메이션 관련 상수들
export const ANIMATION_DELAYS = {
  TITLE_ANIMATION_DURATION: 2400, // Title 애니메이션 완료 시간 (ms)
  SKILL_BADGE_DELAY: 2400, // SkillBadge 애니메이션 시작 지연 시간 (ms)
  SKILL_BADGE_DURATION: 800, // SkillBadge 애니메이션 지속 시간 (ms)
} as const;

export const GRID_CONFIG = {
  COLUMNS: {
    MOBILE: 2,
    TABLET: 2,
    DESKTOP: 4,
  },
  GAP: {
    ROW: '40px',
    COLUMN: '40px',
  },
  CARD: {
    MIN_WIDTH: 100,
    MAX_WIDTH: 250,
    HEIGHT: 60,
  },
} as const;

export const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 600,
  DESKTOP: 900,
} as const;
