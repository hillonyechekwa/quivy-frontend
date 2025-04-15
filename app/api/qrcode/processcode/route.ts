import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const eventId = searchParams.get("eventId")
    const uniqueCode = searchParams.get("uniqueCode")


    if (!eventId || !uniqueCode) {
        return NextResponse.json(
          { error: "Event ID and Unique Code are required" },
          { status: 400 }
        );
    }

    try {
        const response = await authFetch(`${BACKEND_URL}/events/${eventId}/qrcode/${uniqueCode}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            return NextResponse.json(
                {error: "Failed to process QR Code" },
                {status: 500}
            )
        }

        const result = await response.json()
        return NextResponse.json(result)

    } catch (error) {
        console.error("Error processing QR Code", error)
        return NextResponse.json(
          { error: "Failed to process QR Code" },
          { status: 500 }
        );
    }
}