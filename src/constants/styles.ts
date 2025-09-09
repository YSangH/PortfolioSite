// 공통 스타일 상수 정의
export const COMMON_STYLES = {
  colors: {
    primary: "#87CEEB",
    white: "#ffffff",
    textSecondary: "text.secondary",
  },
  shadows: {
    card: "0 2px 10px rgba(0, 0, 0, 0.3)",
    button: "0 2px 10px rgba(0, 0, 0, 0.2)",
    image: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  borderRadius: {
    small: "8px",
    medium: "10px",
  },
  spacing: {
    small: 1,
    medium: 2,
    large: 8,
  },
} as const;

export const CARD_STYLES = {
  minHeight: 300,
  maxHeight: 400,
  boxShadow: COMMON_STYLES.shadows.card,
} as const;

export const BUTTON_STYLES = {
  primary: {
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    fontWeight: "500",
    boxShadow: COMMON_STYLES.shadows.button,
  },
  github: {
    height: "30px",
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    fontWeight: "500",
    boxShadow: COMMON_STYLES.shadows.button,
  },
  moreImage: {
    minWidth: 120,
    height: "30px",
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    fontWeight: "500",
    boxShadow: COMMON_STYLES.shadows.button,
  },
  ppt: {
    height: "40px",
    padding: 2,
    fontSize: "18px",
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    fontWeight: "bold",
    boxShadow: COMMON_STYLES.shadows.button,
  },
  close: {
    height: 40,
    width: 100,
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    fontWeight: "bold",
    fontSize: "20px",
    boxShadow: COMMON_STYLES.shadows.button,
    margin: 2,
  },
} as const;

export const DIALOG_STYLES = {
  title: {
    minHeight: "8vh",
    fontWeight: "bold",
    fontSize: "30px",
    margin: 2,
    lineHeight: "25px",
    display: "block",
    textAlign: "center",
    marginBottom: 5,
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    borderRadius: COMMON_STYLES.borderRadius.medium,
  },
  subtitle: {
    fontSize: "20px",
    backgroundColor: COMMON_STYLES.colors.primary,
    color: COMMON_STYLES.colors.white,
    height: "40px",
    lineHeight: "40px",
    borderRadius: COMMON_STYLES.borderRadius.medium,
    textAlign: "center",
    marginBottom: 2,
    boxShadow: COMMON_STYLES.shadows.button,
  },
  image: {
    width: "100%",
    height: "auto",
    marginTop: 1,
    marginBottom: 8,
    padding: 2,
    borderRadius: COMMON_STYLES.borderRadius.small,
    boxShadow: COMMON_STYLES.shadows.image,
  },
} as const;

export const CARD_MEDIA_STYLES = {
  main: {
    maxHeight: 200,
    objectFit: "cover" as const,
    boxShadow: COMMON_STYLES.shadows.image,
  },
  github: {
    height: 18,
    width: 18,
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    marginRight: 1,
  },
} as const;
