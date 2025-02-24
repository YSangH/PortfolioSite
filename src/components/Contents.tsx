"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

const slideInTop = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface ContentProps {
  titles: string[];
  contents: string[];
}

export default function Contents({ titles, contents }: ContentProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {titles.map((title, index) => (
        <Accordion
          key={index}
          sx={{
            opacity: isVisible ? 1 : 0, // 처음에는 숨김
            animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor: "#87CEEB",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              padding: 3,
            }}
          >
            {contents[index].split("\n\n").map((paragraph, i) => {
              const lines = paragraph.split("\n"); // 문장을 줄바꿈 기준으로 분리
              const firstLine = lines[0].trim(); // 첫 번째 줄 (제목)
              const restLines = lines.slice(1); // 나머지 줄 (본문)

              return (
                <div key={i} style={{ marginBottom: "16px" }}>
                  {/* 제목 부분 - 대괄호([])로 감싸진 경우만 색상 적용 */}
                  {firstLine.startsWith("[") && firstLine.endsWith("]") ? (
                    <Typography
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        color: "#1976D2",
                        marginBottom: "8px",
                      }}
                    >
                      {firstLine}
                    </Typography>
                  ) : (
                    <Typography component="div">{firstLine}</Typography>
                  )}

                  {/* 본문 부분 - 줄바꿈 유지 */}
                  {restLines.length > 0 && (
                    <Typography component="div">
                      {restLines.map((line, j) => (
                        <React.Fragment key={j}>
                          {line}
                          {j < restLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </Typography>
                  )}
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
