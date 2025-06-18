import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";

import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, context: {params: Promise<{eventId: string}>}) {
    
    const params = await context.params
    const {eventId} = params


    console.log(eventId, 'eventId')

    if (!eventId) {
        return NextResponse.json(
            { error: "Event ID is required" },
            { status: 400 }
        );
    }

    try {
        const response = await authFetch(`${BACKEND_URL}/events/${eventId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        

        if (!response.ok) {
            const errResponse = await response.text()
            console.error('Error response body', errResponse)
            return NextResponse.json(
                { error: "Failed to fetch event" },
                { status: 500 }
            );
        }

        const event = await response.json();
        console.log('event', event)

        return NextResponse.json(event, {status: 200});
    } catch (error) {
        console.error("Error fetching event:", error);
        return NextResponse.json(
            { error: "Failed to fetch event" },
            { status: 500 }
        );
    }
}