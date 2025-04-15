import { authFetch } from "@/actions/authFetch";
import { BACKEND_URL } from "@/utils/constants";

import { NextRequest, NextResponse } from "next/server";

// interface EventData {
//     name: string;
//     description: string;
//     date: Date;
//     eventStartTime: Date;
//     eventEndTime: Date;
//     qrCodeValidityDuration: number;
//     status?: string
//     prizes: Array<PrizesData>
// }

// interface PrizesData {
//     name: string;
//     description: string;
//     image: File;
//     quantity: number;
//     status: string;
// }

// interface PrizesData{
//     name: string;
//     description: string;
//     image: File;
//     quantity: number;
//     status: string;
// }


export async function POST(req: NextRequest) {
    const formData = await req.formData();

     for (const pair of formData.entries()) {
       console.log(`${pair[0]}: ${pair[1]}`);
     }

    try {
        const response = await authFetch(`${BACKEND_URL}/events/create`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to create event" },
                { status: 500 }
            );
        }

        const event = await response.json();

        return NextResponse.json(event);
    }catch(error) {
        console.error("Error creating event:", error);
        return NextResponse.json(
            { error: "Failed to create event" },
            { status: 500 }
        );
    }
}