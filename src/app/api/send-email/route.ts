import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 이메일 전송 요청:", body);

    if (!body.to || !body.subject || !body.message) {
      console.error("❌ 요청 데이터 오류: 필수 데이터 누락");
      return NextResponse.json(
        { success: false, error: "잘못된 요청 데이터" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail 주소
        pass: process.env.EMAIL_PASS, // Gmail 앱 비밀번호
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: body.to,
      subject: body.subject,
      text: body.message,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ 이메일 전송 성공");
    return NextResponse.json({ success: true, message: "이메일 전송 완료" });
  } catch (error) {
    console.error("❌ 이메일 전송 오류:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
