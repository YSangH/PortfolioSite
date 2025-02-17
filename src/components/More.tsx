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
// 깃허브 링크
import Link from "next/link";

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
  // 카드 정보
  projectName: string;
  projectText: string;
  // 팝업 이미지
  projectImg: string;
  image1: string;
  image2: string;
  // PPT 파일
  projectFile: string | undefined;
  // 깃허브 링크
  projectLink: string;
  // 팝업 텍스트
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
}

export default function More({
  projectName,
  projectText,
  projectImg,
  image1,
  image2,
  projectFile,
  projectLink,
  subTitle1,
  subTitle2,
  subTitle3,
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
      {/* 카드 영역 */}
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
              minWidth: 120,
              height: "30px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              fontWeight: "500",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => setOpen(true)} // 버튼 클릭 시 모달 열기
          >
            More Image
          </Button>
          <Link href={projectLink}>
            <Button
              sx={{
                height: "30px",
                backgroundColor: "#87CEEB",
                color: "#fff",
                fontWeight: "500",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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
          </Link>
        </CardActions>
      </Card>

      {/* MUI Dialog (팝업) */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            minHeight: "8vh",
            fontWeight: "bold",
            fontSize: "30px",
            margin: 2,
            lineHeight: "25px",
            display: "block",
            textAlign: "center",
            marginBottom: 5,
            backgroundColor: "#87CEEB",
            color: "#ffffff",
            borderRadius: "10px",
          }}
        >
          {projectName}
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontSize: "20px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              height: "40px",
              lineHeight: "40px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {subTitle1}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={projectImg}
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 1,
              marginBottom: 8,
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              height: "40px",
              lineHeight: "40px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {subTitle2}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={image1}
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 1,
              marginBottom: 8,
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
              backgroundColor: "#87CEEB",
              color: "#fff",
              height: "40px",
              lineHeight: "40px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {subTitle3}
          </Typography>
          <CardMedia
            component="img"
            alt="Project"
            image={image2}
            sx={{
              width: "100%",
              height: "auto",
              marginTop: 1,
              marginBottom: 8,
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
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
                height: "40px",
                padding: 2,
                fontSize: "18px",
                backgroundColor: "#87CEEB",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                opacity: projectFile ? 1 : 0.5, // 비활성화 시 투명도 낮춤
                pointerEvents: projectFile ? "auto" : "none", // 클릭 비활성화
              }}
              disabled={!projectFile} // projectFile이 없으면 버튼 비활성화
            >
              PPT로 자세히 보기
            </Button>
          </Link>
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
