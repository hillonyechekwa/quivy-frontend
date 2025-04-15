import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextResponse} from "next/server";



export async function GET() {
  try {
    const response = await authFetch(`${BACKEND_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch profile data" },
        { status: 500 }
      );
    }

    const profileData = await response.json();
    return NextResponse.json(profileData, { status: 200 });
  } catch (error) {
    console.error("Error Fetching profile data", error);
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }
}
