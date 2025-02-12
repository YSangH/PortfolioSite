import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Url from "@/components/Url";
import { Box, Container } from "@mui/material";

// Info에 해당하는 Page
export default function Contact() {
  return (
    <div>
      <Header />
      <Title titleText="Contact" />
      <Box
        sx={{
          height: "65vh",
        }}
      >
        <Container
          disableGutters
          sx={{
            height: "60vh",
            margin: "0px, 237px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3열 그리드
            gap: "65px", // 카드 간 간격
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
          }}
        >
          <Url
            title="Email"
            content="ysh940129@gmail.com"
            imageSrc="/assets/gmail.png"
            url="/Form"
          />
          <Url
            title="Github"
            content="https://github.com/YSangH"
            imageSrc="/assets/github.png"
            url="https://github.com/YSangH"
          />
          <Url
            title="Blog"
            content="https://ysh0129.tistory.com/"
            imageSrc="/assets/tistory.png"
            url="https://ysh0129.tistory.com/"
          />
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
