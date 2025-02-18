import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import TextBox from "@/components/TextBox";
import Contents from "@/components/Contents";
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
            // display: "grid",
            // gridTemplateColumns: "repeat(1, 4fr)",
            // justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
            marginTop: "5vh",
            paddingBottom: "20vh",
          }}
        >
          {/* <TextBox
            title="성장배경"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          /> */}
          <Contents
            titles={["성장과정", "성격", "자신의 장단점", "입사포부"]}
            contents={[
              // 성장과정
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              //  자신의 장단점
              "",
              //
              "",
              //
              "",
            ]}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
