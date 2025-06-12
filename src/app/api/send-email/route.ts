// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { middleware } from "./middleware"; // 추가된 부분

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   // Rate Limiting 적용
//   const rateLimitResponse = await middleware(req);
//   if (!rateLimitResponse.ok) return rateLimitResponse;

//   try {
//     const { to, subject, message } = await req.json();
//     const data = await resend.emails.send({
//       from: "유상현 <ysh940129@gmail.com>",
//       to: [to],
//       subject,
//       text: message,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: (error as Error).message },
//       { status: 500 }
//     );
//   }
// }

// --------------------------------------------------------
// nodemailer 버전

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { middleware } from "./middleware";

export async function POST(req: NextRequest) {
  const rateLimitResponse = await middleware(req);
  if (!rateLimitResponse.ok) return rateLimitResponse;
  try {
    const { to, subject, message } = await req.json();

    // SMTP transporter 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, //  Gmail 주소
        pass: process.env.GMAIL_APP_PASSWORD, // 생성한 앱 비밀번호
      },
    });

    // 메일 옵션
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text: message,
    };

    // 메일 보내기
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "이메일 전송 성공!" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
