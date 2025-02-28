import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { to, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Your Name <your@email.com>", // 반드시 Resend에서 인증한 도메인 사용
      to: [to], // 여러 개의 이메일을 보낼 수도 있음
      subject,
      text: message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
