import { BACKEND_URL } from "@/utils/constants";
import { authFetch } from "@/actions/authFetch";
import { NextResponse, NextRequest } from "next/server";



export async function POST(req: NextRequest) {
    const { profileData } = await req.json()
    
    if(!profileData) {
        return NextResponse.json({ error: "No profile data provided" }, { status: 400 });
    }


    try {
        const response = await authFetch(`${BACKEND_URL}/user/profile`, {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: {
                "Content-Type": "application/json",
            },  
        })

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.error || "Failed to create profile" }, { status: 500 });
        }


        const data = await response.json();

        return NextResponse.json(data, { status: 200 });
    }catch(error) {
        console.error("Error creating profile:", error);
        return NextResponse.json({ error: "An error occurred while creating the profile" }, { status: 500 });
    }
    
}