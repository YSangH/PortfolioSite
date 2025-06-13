import { NextRequest, NextResponse } from "next/server";

const LIMIT = 3; // 최대 요청 횟수
const WINDOW_MS = 15 * 60 * 1000; // 15분 (밀리초)
const requestCounts = new Map<string, { count: number; startTime: number }>();

export function middleware(req: NextRequest) {
  // 헤더에서 클라이언트 IP 가져오기
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, { count: 1, startTime: now });
  } else {
    const entry = requestCounts.get(ip)!;
    if (now - entry.startTime > WINDOW_MS) {
      // 15분이 지나면 초기화
      requestCounts.set(ip, { count: 1, startTime: now });
    } else {
      entry.count++;
      if (entry.count > LIMIT) {
        return NextResponse.json(
          { message: "너무 많은 요청을 보냈습니다. 잠시 후 다시 시도하세요." },
          { status: 429 }
        );
      }
    }
  }

  return NextResponse.next();
}
