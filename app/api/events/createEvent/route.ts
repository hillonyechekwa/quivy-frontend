import { authFetch } from "@/actions/authFetch";
import { BACKEND_URL } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { eventData } = await req.json();

  console.log("Sending to backend:", eventData);
  console.log("Backend URL:", `${BACKEND_URL}/events/create`);
  console.log("BACKEND_URL:", BACKEND_URL);
  console.log("Request payload:", JSON.stringify(eventData, null, 2));

  try {
    //
    const response = await authFetch(`${BACKEND_URL}/events/create`, {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response
        .text()
        .catch(() => "No error details available");
      console.error("Error response:", errorText);

      return NextResponse.json(
        { error: "Failed to create event" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
