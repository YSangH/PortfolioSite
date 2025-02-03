import Header from "@/components/Header";
import SkillBadge from "@/components/SkillBadge";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

// Info에 해당하는 Page
export default function Skills() {
  return (
    <div>
      <Header />
      <Title titleText="Skills" />
      <Box
        sx={{
          height: "75vh",
        }}
      >
        <Container
          disableGutters
          sx={{
            height: "75vh",
            margin: "0px, 237px",
            padding: 4,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2열 그리드
            gap: "65px", // 카드 간 간격
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
          }}
        >
          <SkillBadge
            title="html5"
            skillImg="/assets/html5.png"
            backgroundColor="orange"
          />
        </Container>
      </Box>
    </div>
  );
}
