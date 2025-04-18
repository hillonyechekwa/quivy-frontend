import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextResponse } from "next/server";


export async function POST() {

  try {
    const response = await authFetch(`${BACKEND_URL}/auth/otp-verification`, {
      method: "POST",
    });

    if (response.status === 200) {
      return NextResponse.json({ status: 200, message: "Verification successful" });
    } else {
      return NextResponse.json({ status: response.status, message: "Verification failed" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
}