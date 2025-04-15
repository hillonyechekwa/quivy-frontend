import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const eventId = searchParams.get("eventId")

    if (!eventId) {
        return NextResponse.json({error: "No eventId provided"}, {status: 400})
    }

    try {
        const response = await authFetch(`${BACKEND_URL}/events/${eventId}/generate-qr`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

         if (!response.ok) {
                return NextResponse.json(
                    { error: "Failed to generate QR code" },
                    { status: 500 }
                );
            }
        
        const code = await response.json();

        return NextResponse.json(code);
    } catch (error) {
        console.error("Failed to generate QR code", error)
        return NextResponse.json(
            { error: "Failed to generate QR code" },
            {status: 500}
        )
    }
}