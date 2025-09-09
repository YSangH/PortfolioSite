"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Link from "next/link";
import { Project } from "@/data/portfolio";
import { CARD_STYLES, BUTTON_STYLES, DIALOG_STYLES, CARD_MEDIA_STYLES } from "@/constants/styles";
import { slideInTop, ANIMATION_CONFIG } from "@/types/animations";
import { useAnimation } from "@/hooks/useAnimation";

interface MoreProps {
  project: Project;
}

export default function More({ project }: MoreProps) {
  const {
    name: projectName,
    description: projectText,
    mainImage: projectImg,
    images: { image1, image2 },
    pptFile: projectFile,
    githubLink: projectLink,
    subtitles: { subtitle1: subTitle1, subtitle2: subTitle2, subtitle3: subTitle3 },
  } = project;
  
  const isVisible = useAnimation();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* 카드 영역 */}
      <Card
        sx={{
          ...CARD_STYLES,
          minWidth: { xs: 280, sm: 330 },
          maxWidth: { xs: "100%", sm: 690 },
          animation: isVisible 
            ? `${slideInTop} ${ANIMATION_CONFIG.slideInTop.duration}s ${ANIMATION_CONFIG.slideInTop.easing}` 
            : `none`,
          display: isVisible ? "block" : "none",
        }}
      >
        <CardMedia
          component="img"
          alt="Project"
          image={projectImg}
          sx={CARD_MEDIA_STYLES.main}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {projectName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "700" }}
          >
            {projectText}
          </Typography>
        </CardContent>
        <CardActions 
          sx={{ 
            padding: 2, 
            float: "right",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Button
            sx={BUTTON_STYLES.moreImage}
            onClick={() => setOpen(true)}
          >
            More Image
          </Button>
          <Link href={projectLink}>
            <Button sx={BUTTON_STYLES.github}>
              <CardMedia
                sx={CARD_MEDIA_STYLES.github}
                image="/assets/github.png"
                title="GitHub"
              />
              GitHub
            </Button>
          </Link>
        </CardActions>
      </Card>

      {/* MUI Dialog (팝업) */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            margin: { xs: 1, sm: 2 },
            maxHeight: { xs: "90vh", sm: "80vh" },
          },
        }}
      >
        <DialogTitle sx={DIALOG_STYLES.title}>
          {projectName}
        </DialogTitle>
        <DialogContent>
          <Typography sx={DIALOG_STYLES.subtitle}>
            {subTitle1}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={projectImg}
            sx={DIALOG_STYLES.image}
          />
          <Typography sx={DIALOG_STYLES.subtitle}>
            {subTitle2}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={image1}
            sx={DIALOG_STYLES.image}
          />
          <Typography sx={DIALOG_STYLES.subtitle}>
            {subTitle3}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={image2}
            sx={DIALOG_STYLES.image}
          />
          {/* 새탭으로 PPT 파일 보기 */}
          <Link
            href={projectFile || "#"}
            target={projectFile ? "_blank" : ""}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!projectFile) e.preventDefault(); // 클릭 차단
            }}
          >
            <Button
              sx={{
                ...BUTTON_STYLES.ppt,
                opacity: projectFile ? 1 : 0.5,
                pointerEvents: projectFile ? "auto" : "none",
              }}
              disabled={!projectFile}
            >
              PPT로 자세히 보기
            </Button>
          </Link>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            sx={BUTTON_STYLES.close}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
