import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params : Promise<{ eventId: string }> }
) {

  const formData = await req.formData()
  const params = await context.params
  const { eventId } =  params;

  console.log("prizes eventId", eventId)

  for (const key of formData.keys()) {
    console.log(`${key}: ${formData.get(key)}`);
  }

  try {
    const response = await authFetch(
      `${BACKEND_URL}/prizes/create-many/${eventId}`,
        {
        method: 'POST',
        body: formData,
      }
    );

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
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create prizes" },
      { status: 500 }
    );
  }
}
