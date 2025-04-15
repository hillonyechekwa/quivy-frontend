import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const eventId = searchParams.get("eventId")
    const { data } = await req.json()

    if (!data) {
        return NextResponse.json(
            { error: "No data provided" },
            { status: 400 }
        )
    }

    try {
        const response = await authFetch(`${BACKEND_URL}/participants/create/${eventId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        })


        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to create participant" },
                { status: 500 }
            )
        }

        const result = await response.json()

        return NextResponse.json(result)
    } catch (error) {
        console.error("Error creating participant", error)
        return NextResponse.json(
            { error: "Failed to create participant" },
            { status: 500 }
        )
    }
}