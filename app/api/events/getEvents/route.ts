import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextResponse } from "next/server";


export async function GET() {

    try {
        const response = await authFetch(`${BACKEND_URL}/events/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log('response', response)

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch events" },
                { status: 500 }
            );
        }

        const event = await response.json();

        return NextResponse.json(event);
    } catch (error) {
        console.error("Error fetching event:", error);
        return NextResponse.json(
            { error: "Failed to fetch event" },
            { status: 500 }
        );
    }
}