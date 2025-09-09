import Title from "@/components/Title";
import More from "@/components/More";
import { Box, Container } from "@mui/material";
import { portfolioProjects } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <div>
      <Title titleText="Portfolio" id="portfolio-section" />
      <Box sx={{ minHeight: "60vh" }}>
        <Container
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 모바일: 1열
              sm: "repeat(2, 1fr)", // 태블릿: 2열
              md: "repeat(2, 1fr)", // 데스크톱: 2열
            },
            gap: { xs: "40px", sm: "50px", md: "65px" },
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vh",
            paddingBottom: "20vh",
            paddingX: { xs: 2, sm: 4, md: 6 },
          }}
        >
          {portfolioProjects.map((project) => (
            <More key={project.id} project={project} />
          ))}
        </Container>
      </Box>
    </div>
  );
}
