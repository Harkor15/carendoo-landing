export interface AuthErrorParams {
  errorCode: string | null;
  error: string | null;
  errorDescription: string | null;
  rawParams: URLSearchParams;
}

/**
 * Extracts Supabase auth error parameters from both window.location.search
 * and window.location.hash (e.g. #error=access_denied&error_code=otp_expired...)
 */
export function parseAuthErrorParams(): AuthErrorParams {
  if (typeof window === "undefined") {
    return { errorCode: null, error: null, errorDescription: null, rawParams: new URLSearchParams() };
  }

  const hash = window.location.hash;
  const search = window.location.search;

  let params = new URLSearchParams(search);

  // Supabase OAuth/magic link errors are often placed in the hash fragment
  if (!params.get("error") && !params.get("error_code") && hash) {
    const cleanHash = hash.startsWith("#") ? hash.slice(1) : hash;
    params = new URLSearchParams(cleanHash);
  }

  const errorCode = params.get("error_code");
  const error = params.get("error");
  const errorDescription = params.get("error_description");

  return {
    errorCode,
    error,
    errorDescription,
    rawParams: params,
  };
}
