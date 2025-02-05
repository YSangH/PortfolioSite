"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
// 팝업 레이어 불러오기
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// slide-in-top 애니메이션 정의s
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

interface MoreProps {
  projectName: string;
  projectText: string;
  projectImg: string;
}

export default function More({
  projectName,
  projectText,
  projectImg,
}: MoreProps) {
  const [isVisible, setIsVisible] = React.useState(false); // 애니메이션 타이머 상태
  const [open, setOpen] = React.useState(false); // 팝업 레이어 상태

  // 해당 애니메이션 타이머 지정
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2400); // 애니메이션 시작 지연 시간과 일치하도록 설정
    // 2400 = 2.4초로 설정한 이유 : Title.tsx의 애니메이션 시간 이후 동작하게 하기 위해서
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Card
        sx={{
          minWidth: 330,
          maxWidth: 690,
          minHeight: 300,
          maxHeight: 400,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          animation: isVisible ? `${slideInTop} 0.8s ease-out` : `none`,
          display: isVisible ? "block" : "none", // Flexbox 적용
        }}
      >
        <CardMedia
          component="img"
          alt="Project"
          image={projectImg}
          sx={{
            maxHeight: 200,
            objectFit: "cover",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
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
        <CardActions sx={{ padding: 2, float: "right" }}>
          <Button
            sx={{
              minWidth: 150,
              height: "30px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              fontWeight: "500",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              // border: " #a9a9a9 1px solid",
            }}
            onClick={() => setOpen(true)} // 버튼 클릭 시 모달 열기
          >
            More Image
          </Button>
          <Button
            sx={{
              height: "30px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              fontWeight: "500",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              // border: "#a9a9a9 1px solid",
            }}
          >
            <CardMedia
              sx={{
                height: 18,
                width: 18,
                flexShrink: 0, // 크기 유지
                display: "flex",
                justifyContent: "center",
                marginRight: 1,
              }}
              image="/assets/github.png"
              title="SkillImage"
            />
            GitHub
          </Button>
        </CardActions>
      </Card>

      {/* MUI Dialog (팝업) */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            height: "8vh",
            fontWeight: "bold",
            fontSize: "30px",
            margin: 1,
            display: "flex",
            textAlign: "center",
          }}
        >
          {projectName}
        </DialogTitle>
        <DialogContent sx={{ margin: 1, fontSize: "18px" }}>
          메인화면
          <CardMedia
            component="img"
            alt="Project"
            image="/assets/sideProjectMain.png"
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 1,
              marginBottom: 2,
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          메인화면2
          <CardMedia
            component="img"
            alt="Project"
            image="/assets/sideProjectMain.png"
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 1,
              marginBottom: 2,
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            sx={{
              height: 40,
              width: 100,
              backgroundColor: "#87CEEB",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "20px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              margin: 2,
            }}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
