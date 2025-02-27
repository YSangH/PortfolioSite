"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

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

interface ContentItem {
  title: string;
  text?: string | string[];
  image?: string;
  buttonText?: string | string[];
  modalContent?: string | string[];
}

interface ContentProps {
  titles: string[];
  contents: (string | ContentItem)[];
}

export default function Contents({ titles, contents }: ContentProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = (content: string) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 대괄호(`[]`) 안의 텍스트를 스타일링하는 함수
  const formatText = (text: string) => {
    const regex = /\[(.*?)\]/g; // 대괄호 안의 내용 찾기
    const parts = text.split(regex); // 대괄호를 기준으로 문자열을 나누기

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <Typography
          key={index}
          component="span"
          sx={{
            fontWeight: "bold",
            color: "#87CEEB",
          }}
        >
          [{part}]
        </Typography>
      ) : (
        <Typography component="span" key={index}>
          {part}
        </Typography>
      )
    );
  };

  return (
    <>
      {titles.map((title, index) => {
        const content = contents[index];

        return (
          <Accordion
            key={index}
            sx={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? `${slideInTop} 0.8s ease-out` : "none",
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
              {typeof content === "object" ? (
                <>
                  {content.title && (
                    <Typography
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        color: "#1976D2",
                        marginBottom: "8px",
                      }}
                    >
                      {content.title}
                    </Typography>
                  )}

                  {Array.isArray(content.text) ? (
                    content.text.map((line, i) => (
                      <div key={i} style={{ marginBottom: "8px" }}>
                        <Typography
                          component="div"
                          sx={{ whiteSpace: "pre-line" }}
                        >
                          {formatText(line)}
                        </Typography>

                        {Array.isArray(content.buttonText) &&
                          Array.isArray(content.modalContent) &&
                          content.buttonText[i] && (
                            <Button
                              variant="contained"
                              sx={{
                                marginTop: "6px",
                                marginBottom: "10px",
                                backgroundColor: "#87CEEB",
                                fontWeight: "bold",
                                fontSize: "15px",
                              }}
                              onClick={() =>
                                handleOpen(content.modalContent?.[i] ?? "")
                              }
                            >
                              {content.buttonText?.[i]}
                            </Button>
                          )}
                      </div>
                    ))
                  ) : (
                    <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                      {formatText(content.text as string)}
                    </Typography>
                  )}
                </>
              ) : (
                <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                  {formatText(content as string)}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>상세 이미지</DialogTitle>
        <DialogContent sx={{ maxHeight: "80vh", overflowY: "auto" }}>
          {modalContent.startsWith("/") ? (
            <Image
              src={modalContent}
              alt="활동 및 경력 이미지"
              width={600}
              height={800}
              style={{
                width: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Typography>{modalContent}</Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
