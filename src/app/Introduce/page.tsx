import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextBox from "@/components/TextBox";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

export default function Introduce() {
  return (
    <>
      <Header />
      <Title titleText="Introduce" />
      <Box sx={{ height: "60vh" }}>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 4fr)",
            gap: "65px",
            justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
            marginTop: "5vh",
            paddingBottom: "20vh",
          }}
        >
          <TextBox
            title="성장배경"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          {/* <TextBox
            title="성장배경"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          /> */}
        </Container>
      </Box>
      <Footer />
    </>
  );
}
