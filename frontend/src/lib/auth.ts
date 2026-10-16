const TOKEN_KEY = "tako_auth_token";
const LEGACY_TOKEN_KEY = "token";
const COOKIE_KEY = "tako_auth_token";

export function getAuthToken() {
  if (typeof window === "undefined") return null;
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) return token;

  const legacyToken = window.localStorage.getItem(LEGACY_TOKEN_KEY);
  if (legacyToken) {
    window.localStorage.setItem(TOKEN_KEY, legacyToken);
    window.localStorage.removeItem(LEGACY_TOKEN_KEY);
  }
  return legacyToken;
}

export function saveAuthToken(token: string) {
  window.localStorage.setItem(TOKEN_KEY, token);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(token)}; Path=/; SameSite=Lax; Max-Age=604800`;
  window.dispatchEvent(new Event("tako-auth-changed"));
}

export function clearAuthToken() {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(LEGACY_TOKEN_KEY);
  window.localStorage.removeItem("userID");
  document.cookie = `${COOKIE_KEY}=; Path=/; SameSite=Lax; Max-Age=0`;
  window.dispatchEvent(new Event("tako-auth-changed"));
}

export function isAuthStorageKey(key: string | null) {
  return key === null || key === TOKEN_KEY || key === LEGACY_TOKEN_KEY;
}
