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
      {/* 페이지 전체 영역 */}
      <Box
        sx={{
          height: "75vh",
        }}
      >
        {/* 스킬 뱃지 영역 */}
        <Container
          disableGutters
          sx={{
            margin: "0px, 237px",
            padding: 4,
            display: "grid",
            gridTemplateColumns: "repeat(4, 3fr)", // 4열 3행 그리드
            rowGap: "40px", // 카드 가로간 간격
            columnGap: "40px", // 카드 세로간 간격
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
          }}
        >
          <SkillBadge
            title="HTML5"
            skillImg="/assets/html5.png"
            backgroundColor="#E44D26"
          />
          <SkillBadge
            title="CSS3"
            skillImg="/assets/css3.png"
            backgroundColor="#1572B6"
          />
          <SkillBadge
            title="JavaScript"
            skillImg="/assets/js.png"
            backgroundColor="#F7DF1E"
          />
          <SkillBadge
            title="TypeScript"
            skillImg="/assets/typescript.png"
            backgroundColor="#007ACC"
          />
          <SkillBadge
            title="React"
            skillImg="/assets/react.png"
            backgroundColor="#61DAFB"
          />
          <SkillBadge
            title="Vite"
            skillImg="/assets/vite.png"
            backgroundColor="#646CFF"
          />
          <SkillBadge
            title="Next.js"
            skillImg="/assets/nextjs.png"
            backgroundColor="#b0b0b0"
          />
          <SkillBadge
            title="BootStrap"
            skillImg="/assets/bootstrap.png"
            backgroundColor="#007bff"
          />
          <SkillBadge
            title="ElacticUI"
            skillImg="/assets/elastic.png"
            backgroundColor="#00B3A6"
          />
          <SkillBadge
            title="MaterialUI"
            skillImg="/assets/mui.png"
            backgroundColor="#1976D2"
          />
          <SkillBadge
            title="Firebase"
            skillImg="/assets/firebase.png"
            backgroundColor="#FFCA28"
          />
          <SkillBadge
            title="Github"
            skillImg="/assets/github.png"
            backgroundColor="#586069"
          />
        </Container>
      </Box>
    </div>
  );
}
