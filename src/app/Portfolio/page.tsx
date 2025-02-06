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
            projectName="비즈니스 플랫폼"
            projectText="자바기반 풀스택 웹 개발자 실무 양성과정 4인 SemiProject입니다."
            projectImg="/assets/semimain.png"
            projectLink="https://github.com/zzooong2/TeamProject_Copang"
            ProjectFile="/files/semiProject.pdf"
            image1="/assets/semimain2.png"
            image2="/assets/category.png"
            subTitle1="메인 페이지(1)"
            subTitle2="메인 페이지(2)"
            subTitle3="카테고리 페이지"
          />
          <More
            projectName="숙박업소 플랫폼"
            projectText="자바기반 풀스택 웹 개발자 실무 양성과정 4인 FinalProject입니다."
            projectImg="/assets/finalmain.png"
            projectLink="https://github.com/JaydenKim0528/StayWithMe"
            ProjectFile="/files/finalProject.pdf"
            image1="/assets/list.png"
            image2="/assets/detail.png"
            subTitle1="메인 페이지"
            subTitle2="리스트 페이지"
            subTitle3="상세 페이지"
          />
        </Container>
      </Box>
    </div>
  );
}
