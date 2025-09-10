"use client";

import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import Link from "next/link";
import { useEmailForm, type FormData, type EmailStatus } from "@/hooks/useEmailForm";

// 스타일 상수
const styles = {
  backgroundContainer: {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'url("/assets/plane.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainContainer: {
    pt: 8,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    p: 4,
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#87CEEB",
    height: "50px",
    fontSize: "30px",
    fontWeight: "bold",
    borderRadius: "10px",
    color: "#ffffff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    lineHeight: "50px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 2,
    gap: 2,
  },
  button: {
    flex: 1,
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "#87CEEB",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#6bb6d6",
    },
  },
  emailInput: {
    fontWeight: "bold",
    fontSize: "20px",
  },
} as const;


// 컴포넌트 분리
const FormHeader = () => (
  <Typography
    gutterBottom
    sx={styles.title}
  >
    이메일 보내기
  </Typography>
);

const EmailForm = ({ 
  formData, 
  isLoading, 
  email, 
  handleInputChange, 
  handleSubmit 
}: {
  formData: FormData;
  isLoading: boolean;
  email: string;
  handleInputChange: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <form onSubmit={handleSubmit}>
    <TextField
      label="이메일 주소"
      placeholder="Mailname@example.com"
      fullWidth
      margin="normal"
      value={email}
      disabled
      InputProps={{
        style: styles.emailInput,
      }}
    />
    <TextField
      label="제목"
      placeholder="제목을 적어주세요"
      fullWidth
      margin="normal"
      value={formData.subject}
      onChange={handleInputChange("subject")}
      required
      disabled={isLoading}
    />
    <TextField
      label="내용"
      fullWidth
      multiline
      placeholder="내용을 적어주세요"
      rows={6}
      margin="normal"
      value={formData.message}
      onChange={handleInputChange("message")}
      required
      disabled={isLoading}
    />
    <Container
      disableGutters
      maxWidth="sm"
      sx={styles.buttonContainer}
    >
      <Button
        type="submit"
        variant="contained"
        sx={styles.button}
        disabled={isLoading}
      >
        {isLoading ? "전송 중..." : "보내기"}
      </Button>
      <Link href="/Contact">
        <Button
          type="button"
          variant="contained"
          sx={styles.button}
          disabled={isLoading}
        >
          뒤로가기
        </Button>
      </Link>
    </Container>
  </form>
);

const StatusMessage = ({ status }: { status: EmailStatus | null }) => {
  if (!status) return null;

  return (
    <Alert 
      severity={status.type} 
      sx={{ mt: 2 }}
    >
      {status.message}
    </Alert>
  );
};

// 메인 컴포넌트
export default function Form() {
  const {
    formData,
    status,
    isLoading,
    email,
    handleInputChange,
    handleSubmit,
  } = useEmailForm();

  return (
    <Box sx={styles.backgroundContainer}>
      <Container maxWidth="sm" sx={styles.mainContainer}>
        <Container sx={styles.formContainer}>
          <FormHeader />
          <EmailForm
            formData={formData}
            isLoading={isLoading}
            email={email}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <StatusMessage status={status} />
        </Container>
      </Container>
    </Box>
  );
}
