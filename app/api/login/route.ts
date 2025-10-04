import { NextResponse } from "next/server";
import { validateCredentials, AUTH_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const { valid } = validateCredentials(email, password);

  if (!valid) {
    return NextResponse.json({ ok: false, error: "Identifiants invalides" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  return res;
}


