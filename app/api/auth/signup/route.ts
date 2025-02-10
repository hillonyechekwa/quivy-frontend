import { BACKEND_URL } from "@/utils/constants";
import { NextResponse, NextRequest } from "next/server";
import axios from "axios";



export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        if (!body.email || !body) {
            return NextResponse.json(
                {error: "Missing Required Field Data"},
                {status: 400}
            )
        }


        const backendResponse = await axios.post(`${BACKEND_URL}/auth/signup`, { body }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseText = await backendResponse.statusText

        if (backendResponse.status !== 200) {
            return NextResponse.json(
              {
                error: "Backend Submission Failed!",
                status: backendResponse.status,
                details: responseText
              },
              {status: backendResponse.status},
            );
        }

        const responseData = backendResponse.data

        return NextResponse.json(
            { messae: "Submission Successfull", data: responseData },
            {status: 200}
        )

       
    } catch (error) {
        console.error("submission error:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            {status: 500}
        )
        
    }
}

