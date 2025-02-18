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
            }}
          >
            <Typography>{contents[index]}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
