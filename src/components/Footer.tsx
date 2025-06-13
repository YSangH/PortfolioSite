// "use client";
// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import { Box, Container } from "@mui/material";

// export default function Footer() {
//   return (
//     <>
//       <Box
//         sx={{
//           minWidth: "600px",
//           width: "100%",
//           minHeight: "10vh",
//           display: "flex",
//           alignItems: "center",
//           backgroundColor: "#87CEEB",
//           color: "#ffffff",
//           position: "fixed",
//           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <Container sx={{ textAlign: "center", paddingTop: "5px" }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: "clamp(0.5rem, 1vw, 1rem)",
//               letterSpacing: "4px",
//               fontWeight: "bold",
//               marginBottom: "2px",
//             }}
//           >
//             ⓒ Copyright 2025. YuSangHyeon all rights reserved.
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: "clamp(0.5rem, 1vw, 1rem)",
//               letterSpacing: "2px",
//               fontWeight: "bold",
//               marginBottom: "2px",
//             }}
//           >
//             Next.js, Material UI 기반으로 제작된 사이트입니다.
//           </Typography>
//         </Container>
//       </Box>
//     </>
//   );
// }

// ---------------------------------------------------------

"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#87CEEB",
          color: "#ffffff",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
        }}
      >
        <Container sx={{ textAlign: "center", paddingTop: "5px" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "clamp(0.5rem, 1vw, 1rem)",
              letterSpacing: { xs: "1px", md: "4px" },
              fontWeight: "bold",
              marginBottom: "2px",
              whiteSpace: "normal",
            }}
          >
            ⓒ Copyright 2025. YuSangHyeon all rights reserved.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "clamp(0.5rem, 1vw, 1rem)",
              letterSpacing: { xs: "1px", md: "2px" },
              fontWeight: "bold",
              marginBottom: "2px",
              whiteSpace: "normal",
            }}
          >
            Next.js, Material UI 기반으로 제작된 사이트입니다.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
