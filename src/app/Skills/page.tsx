import SkillBadge from "@/components/SkillBadge";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";
import { skills } from "@/data/skills";
import { GRID_CONFIG } from "@/constants/animations";

// 스타일 객체 분리
const styles = {
  pageContainer: {
    minHeight: "calc(100vh - 20vh)", // Header와 Footer를 제외한 높이
    paddingBottom: "10vh", // Footer 높이만큼 하단 여백 추가
    display: "flex",
    flexDirection: "column",
  },
  skillsContainer: {
    margin: "0px auto",
    padding: {
      xs: 2,
      sm: 3,
      md: 4,
    },
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    gridTemplateColumns: {
      xs: `repeat(${GRID_CONFIG.COLUMNS.MOBILE}, 1fr)`,
      sm: `repeat(${GRID_CONFIG.COLUMNS.TABLET}, 1fr)`,
      md: `repeat(${GRID_CONFIG.COLUMNS.DESKTOP}, 1fr)`,
    },
    rowGap: GRID_CONFIG.GAP.ROW,
    columnGap: GRID_CONFIG.GAP.COLUMN,
    minHeight: "400px",
    flex: 1, // 남은 공간을 모두 사용
  },
} as const;

export default function Skills() {
  return (
    <div>
      <Title titleText="Skills" id="skills-section" />
      
      {/* 페이지 전체 영역 */}
      <Box sx={styles.pageContainer}>
        {/* 스킬 뱃지 영역 */}
        <Container disableGutters sx={styles.skillsContainer}>
          {skills.map((skill) => (
            <SkillBadge
              key={skill.id}
              title={skill.title}
              skillImg={skill.skillImg}
              backgroundColor={skill.backgroundColor}
            />
          ))}
        </Container>
      </Box>
      
    </div>
  );
}
