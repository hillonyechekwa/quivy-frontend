import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const eventId = searchParams.get("eventId")

    if (!eventId) {
        return NextResponse.json(
            { error: "Event ID is required" },
            { status: 400 }
        )
    }


    try {
        const response = await authFetch(`${BACKEND_URL}/events/${eventId}/status`, {
            method: "GET",
             headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
                    return NextResponse.json(
                        { error: "Failed to fetch event status" },
                        { status: 500 }
                    );
                }
        
                const event = await response.json();
        
                return NextResponse.json(event);
    } catch (error) {
        console.error("Error fetching event status", error)
        return NextResponse.json(
          { error: "Failed to fetch event status" },
          { status: 500 }
        );
    }
}