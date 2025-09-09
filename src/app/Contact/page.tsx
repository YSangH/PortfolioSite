import Title from "@/components/Title";
import ContactCard from "@/components/Url";
import { Box, Container, Typography } from "@mui/material";
import { CONTACT_INFO } from "@/data/contact";

export default function Contact() {
  return (
    <div>
      <Title titleText="Contact" id="contact-section" />
      
      {/* 메인 컨텐츠 영역 */}
      <Box
        component="main"
        role="main"
        aria-label="연락처 정보"
        sx={{
          minHeight: "75vh",
          padding: { xs: 2, sm: 3, md: 4 },
          paddingBottom: { xs: "15vh", sm: "15vh", md: "15vh" },
        }}
      >
        <Container maxWidth="lg">
          {/* 연락처 소개 텍스트 */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              다양한 방법으로 연락해주세요
            </Typography>
          </Box>

          {/* 연락처 카드 그리드 */}
          <Box
            component="section"
            aria-label="연락처 방법 목록"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", // 모바일: 1열
                sm: "repeat(2, 1fr)", // 태블릿: 2열
                md: "repeat(3, 1fr)", // 데스크톱: 3열
              },
              gap: { xs: 3, sm: 4, md: 5 },
              justifyContent: "center",
              alignItems: "stretch",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {CONTACT_INFO.map((contact) => (
              <ContactCard
                key={contact.id}
                title={contact.title}
                content={contact.content}
                imageSrc={contact.imageSrc}
                url={contact.url}
                description={contact.description}
              />
            ))}
          </Box>
        </Container>
      </Box>
      
    </div>
  );
}
