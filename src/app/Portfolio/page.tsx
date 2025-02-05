import Header from "@/components/Header";
import More from "@/components/More";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

// Info에 해당하는 Page
export default function Portfolio() {
  return (
    <div>
      <Header />
      <Title titleText="Portfolio" />
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
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2열 그리드
            gap: "65px", // 카드 간 간격
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
          }}
        >
          <More
            projectName="프로젝트명"
            projectText="프로젝트 간단하게 설명할 텍스트 영역입니다."
            projectImg="/assets/sideProjectMain.png"
          />
          <More
            projectName="프로젝트명"
            projectText="프로젝트 간단하게 설명할 텍스트 영역입니다."
            projectImg="/assets/sideProjectMain.png"
          />
        </Container>
      </Box>
    </div>
  );
}
