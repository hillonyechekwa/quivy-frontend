import { authFetch } from "@/actions/authFetch";
import { deleteSession } from "@/utils/session";
import { BACKEND_URL } from "@/utils/constants";


import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
      const response = await authFetch(`${BACKEND_URL}/auth/signout`, {
        method: "POST",
      });


      if (!response.ok || response.status === 201) {
        return NextResponse.json(
          { error: "Failed to signout" },
          {status: response.status}
        )
      }
      // Delete the session regardless of the backend response
      await deleteSession();

      // Instead of using permanentRedirect, use NextResponse.redirect()
      // This is the proper way to redirect from an API route
      const redirectUrl = new URL("/", req.url);
      return NextResponse.redirect(redirectUrl, {
        // Use 303 See Other for redirects after POST operations
        status: 303,
      });
    } catch (error) {
      console.error(error);
      // Even if there's an error, we should still delete the session and redirect
      await deleteSession();

      const redirectUrl = new URL("/", req.url);
      return NextResponse.redirect(redirectUrl, {
        status: 303,
      });
    }

}