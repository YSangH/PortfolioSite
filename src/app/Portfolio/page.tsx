import Footer from "@/components/Footer";
import Header from "@/components/Header";
import More from "@/components/More";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

// Info에 해당하는 Page
export default function Portfolio() {
  return (
    <>
      <Header />
      <Title titleText="Portfolio" />
      <Box sx={{ height: "60vh" }}>
        <Container
          disableGutters
          sx={{
            margin: "0px, 237px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 2fr)", // 2열 그리드
            gap: "65px",
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
            marginTop: "5vh",
            paddingBottom: "20vh",
          }}
        >
          <More
            projectName="비즈니스 플랫폼"
            projectText="자바기반 풀스택 웹 개발자 실무 양성과정 4인 SemiProject입니다."
            projectImg="/assets/semimain.png"
            projectLink="https://github.com/zzooong2/TeamProject_Copang"
            projectFile="/files/semiProject.pdf"
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
            projectFile="/files/finalProject.pdf"
            image1="/assets/list.png"
            image2="/assets/detail.png"
            subTitle1="메인 페이지"
            subTitle2="리스트 페이지"
            subTitle3="상세 페이지"
          />
          <More
            projectName="Zoom Clone Coding"
            projectText="React와 ZegoCloud, Firebase를 이용한 Zoom 화상채팅 클론코딩입니다."
            projectImg="/assets/zoommain.png"
            projectLink="https://github.com/YSangH/zoomclone"
            projectFile={undefined}
            image1="/assets/dashboard.png"
            image2="/assets/room.png"
            subTitle1="메인 페이지"
            subTitle2="대시보드 페이지"
            subTitle3="대기방 페이지"
          />
          <More
            projectName="복권번호 추첨기"
            projectText="2인 SideProject입니다."
            projectImg="/assets/lottomain.png"
            projectLink="https://github.com/BTBIIT/lottery"
            projectFile={undefined}
            image1="/assets/animation.gif"
            image2="/assets/single.gif"
            subTitle1="추첨기 페이지"
            subTitle2="추첨 애니메이션"
            subTitle3="1회 추첨 출력결과"
          />
          <More
            projectName="개발자 포트폴리오 홈페이지"
            projectText="Next.js와 materialUI를 이용하여 제작한 개발자 홈페이지 입니다."
            projectImg="/assets/devmain.gif"
            projectLink="https://github.com/YSangH/PortfolioSite"
            projectFile={undefined}
            image1="/assets/devinfo.gif"
            image2="/assets/devskills.gif"
            subTitle1="메인 페이지"
            subTitle2="정보 페이지"
            subTitle3="기술스택 페이지"
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
