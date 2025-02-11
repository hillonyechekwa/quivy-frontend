import { authFetch } from "@/actions/authFetch";
import { deleteSession } from "@/utils/session";
import { BACKEND_URL } from "@/utils/constants";
import { redirect, RedirectType } from "next/navigation";

// import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(){
    const response = await authFetch(`${BACKEND_URL}/auth/signout`, {
        method: "POST"
    })

    console.log(response)
    if (response.ok) {
        return NextResponse.json(
            {error: "Missing Required Field Data"},
            {status: 400}
        )
    }

    await deleteSession()

    redirect("/", RedirectType.push)
}