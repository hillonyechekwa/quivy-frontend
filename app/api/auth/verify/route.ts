import { authFetch } from "@/actions/authFetch";
import { BACKEND_URL } from "@/utils/constants";


import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { otp } = await req.json()

  if (!otp) {
    return NextResponse.json({ message: "OTP is required" }, { status: 400 });
  }

  try {
    const response = await authFetch(`${BACKEND_URL}/auth/verify/${otp}`, {
      method: "POST",
    });

    console.log('response', response)

    if (response.ok) {
      return NextResponse.json({ message: "Verification successful" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Verification failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error during verification:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}