import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

export default function Info() {
  return (
    <div>
      {/* 헤더 */}
      <Header />
      {/* 타이틀 헤드라인 */}
      <Title titleText="Info" />
      {/* 페이지 영역 */}
      <Box
        sx={{
          height: "60vh",
        }}
      >
        <Container
          disableGutters
          sx={{
            marginTop: "5vh",
            height: "55vh",
            margin: "0px, 237px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2열 그리드
            gap: "65px", // 카드 간 간격
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
          }}
        >
          <Card title="이름" content="유상현" imageSrc="/assets/name.jpg" />
          <Card
            title="생년월일"
            content="1994월 1월 29일"
            imageSrc="/assets/birth.jpg"
          />
          <Card
            title="주소"
            content="경기도 수원시 권선구"
            imageSrc="/assets/address.jpg"
          />
          <Card
            title="학력"
            content={"오산대학교 \n 인터넷정보처리과"}
            imageSrc="/assets/education.jpg"
          />
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
