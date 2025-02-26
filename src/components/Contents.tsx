"use client";
import * as React from "react";
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

  return (
    <>
      {titles.map((title, index) => {
        const content = contents[index];

        return (
          <Accordion
            key={index}
            sx={{
              opacity: isVisible ? 1 : 0,
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
              {typeof content === "object" ? (
                <>
                  {/* 제목 */}
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

                  {/* 설명 텍스트 & 버튼 (여러 개 처리) */}
                  {Array.isArray(content.text) ? (
                    content.text.map((line, i) => (
                      <div key={i} style={{ marginBottom: "8px" }}>
                        <Typography component="div">{line}</Typography>

                        {/* 버튼이 존재하는 경우에만 출력 */}
                        {Array.isArray(content.buttonText) &&
                          Array.isArray(content.modalContent) && (
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ marginTop: "6px", marginBottom: "10px" }}
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
                    <Typography component="div">{content.text}</Typography>
                  )}
                </>
              ) : (
                // 일반 텍스트 처리
                <Typography component="div">{content as string}</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}

      {/* 팝업 레이어 (모달) */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>상세 이미지</DialogTitle>
        <DialogContent sx={{ maxHeight: "80vh", overflowY: "auto" }}>
          {modalContent.startsWith("/") ? ( // 이미지 경로인지 확인
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
            <Typography>{modalContent}</Typography> // 텍스트인 경우
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
