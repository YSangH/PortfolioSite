// import Card from "@/components/Card";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Title from "@/components/Title";
// import { Box, Container } from "@mui/material";

// export default function Info() {
//   return (
//     <div>
//       {/* 헤더 */}
//       <Header />
//       {/* 타이틀 헤드라인 */}
//       <Title titleText="Info" />
//       {/* 페이지 영역 */}
//       <Box
//         sx={{
//           height: "60vh",
//         }}
//       >
//         <Container
//           disableGutters
//           sx={{
//             marginTop: "5vh",
//             height: "55vh",
//             margin: "0px, 237px",
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)", // 2열 그리드
//             gap: "65px", // 카드 간 간격
//             justifyContent: "center", // 중앙 정렬
//             alignItems: "center", // 세로 정렬
//           }}
//         >
//           <Card title="이름" content="유상현" imageSrc="/assets/name.jpg" />
//           <Card
//             title="생년월일"
//             content="1994년 1월 29일"
//             imageSrc="/assets/birth.jpg"
//           />
//           <Card
//             title="주소"
//             content="경기도 수원시 권선구"
//             imageSrc="/assets/address.jpg"
//           />
//           <Card
//             title="학력"
//             content={"오산대학교(졸업) \n 인터넷정보처리과"}
//             imageSrc="/assets/education.jpg"
//           />
//         </Container>
//       </Box>
//       <Footer />
//     </div>
//   );
// }

"use client";
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
          // 헤더(10vh)와 푸터(10vh)를 제외한 나머지 화면 높이를 최소 높이로 설정
          minHeight: "calc(100vh - 20vh)",
          display: "flex", // flexbox를 사용하여 내부 컨텐츠 정렬
          flexDirection: "column", // 세로 방향으로 정렬
          justifyContent: "center", // 수직 중앙 정렬
          alignItems: "center", // 수평 중앙 정렬 (Container를 중앙에 배치)
          paddingY: { xs: 2, sm: 4 }, // 상하 패딩 추가 (작은 화면에서 좁게)
        }}
      >
        <Container
          disableGutters // Container의 기본 좌우 패딩 제거 (커스텀 패딩을 위해)
          sx={{
            paddingX: { xs: 2, sm: 4, md: 8 },
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: { xs: "20px", sm: "65px" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card title="이름" content="유상현" imageSrc="/assets/name.jpg" />
          <Card
            title="생년월일"
            content="1994년 1월 29일"
            imageSrc="/assets/birth.jpg"
          />
          <Card
            title="주소"
            content="경기도 수원시 권선구"
            imageSrc="/assets/address.jpg"
          />
          <Card
            title="학력"
            content={"오산대학교(졸업) \n 인터넷정보처리과"}
            imageSrc="/assets/education.jpg"
          />
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
