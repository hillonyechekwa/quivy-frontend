import { refreshToken } from "./auth";
import { getSession } from "@/utils/session";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const authFetch = async (
  url: string | URL,
  options: FetchOptions = {}
) => {
  const session = await getSession();

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session?.backendTokens?.accessToken}`,
  };

  let response = await fetch(url, options);

  if (response.status === 401) {
    if (!session?.backendTokens.refreshToken)
      throw new Error("refresh token not found!");

    const newToken = await refreshToken(session?.backendTokens.refreshToken);

    if (newToken) {
      options.headers.Authorization = `Bearer ${newToken.accessToken}`;
      response = await fetch(url, options);
    }
  }

  return response;
};
