import { refreshToken } from "./auth";
import { deleteSession, getSession } from "@/utils/session";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const authFetch = async (
  url: string | URL,
  options: FetchOptions = {}
) => {
  const session = await getSession();

  console.log('session', session)


  if (!session?.backendTokens?.accessToken) {
    throw new Error("No access token found");
  }

  console.log("Making request to:", url.toString());
  
  // Don't set Content-Type for FormData
  const isFormData = options.body instanceof FormData;
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session.backendTokens.accessToken}`,
  };
  
  // Only set Content-Type if not FormData
  if (!isFormData) {
    options.headers["Content-Type"] = "application/json";
  }

  console.log("With headers:", options.headers);

  let response = await fetch(url, options);

  if (response.status === 401) {
    if (!session?.backendTokens.refreshToken) {
      throw new Error("refresh token not found!");
    }

    try {
      const newToken = await refreshToken(session?.backendTokens.refreshToken);
      
      if (newToken) {
        options.headers.Authorization = `Bearer ${newToken}`;
        response = await fetch(url, options);
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.message === 'REFRESH_TOKEN_EXPIRED') {
        await deleteSession()
        throw new Error("SESSION_EXPIRED")
      }

      throw error
    }

  }

  return response;
};
