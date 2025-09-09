"use client";

import Card from "@/components/Card";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";
import { personalInfoData } from "@/data/personalInfo";

export default function Info() {
  return (
    <div>
      <Title titleText="Info" id="info-section" />
      
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingY: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)"
            },
            gap: { xs: 3, sm: 4, md: 6 },
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {personalInfoData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.content}
              imageSrc={item.imageSrc}
            />
          ))}
        </Container>
      </Box>
      
    </div>
  );
}
