import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { middleware } from "./middleware"; // 추가된 부분

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // Rate Limiting 적용
  const rateLimitResponse = await middleware(req);
  if (!rateLimitResponse.ok) return rateLimitResponse;

  try {
    const { to, subject, message } = await req.json();
    const data = await resend.emails.send({
      from: "유상현 <ysh940129@gmail.com>",
      to: [to],
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
