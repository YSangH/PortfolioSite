import { useState } from "react";

// 타입 정의
export interface FormData {
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
}

export interface EmailStatus {
  type: "success" | "error";
  message: string;
}

// 커스텀 훅
export const useEmailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<EmailStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const email = "ysh940129@gmail.com";

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          to: email, 
          subject: formData.subject, 
          message: formData.message 
        }),
      });

      const data: EmailResponse = await res.json();
      
      if (data.success) {
        setStatus({
          type: "success",
          message: "이메일이 성공적으로 전송되었습니다!"
        });
        setFormData({ subject: "", message: "" }); // 폼 초기화
      } else {
        setStatus({
          type: "error",
          message: data.message || "전송 실패"
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "네트워크 오류가 발생했습니다."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    status,
    isLoading,
    email,
    handleInputChange,
    handleSubmit,
  };
};
