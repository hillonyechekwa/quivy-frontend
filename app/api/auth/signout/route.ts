import { authFetch } from "@/actions/authFetch";
import { deleteSession } from "@/utils/session";
import { BACKEND_URL } from "@/utils/constants";
import { redirect, RedirectType } from "next/navigation";

// import { NextRequest } from "next/server";

export async function GET() {
    const response = await authFetch(`${BACKEND_URL}/auth/signout`, {
        method: "POST"
    })
    console.log(response)
    if (response.ok) {
        return null
    }

    await deleteSession()

    redirect("/", RedirectType.push)
}