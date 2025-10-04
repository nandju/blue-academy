import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "blue_auth";

// Predefined internal credentials
const PREDEFINED_USER = {
  email: "etudiant@blue-academy.ci",
  password: "blue12345",
  name: "Jean Dupont",
};

export function validateCredentials(email: string, password: string) {
  const valid =
    email.trim().toLowerCase() === PREDEFINED_USER.email &&
    password === PREDEFINED_USER.password;
  return {
    valid,
    user: valid
      ? { email: PREDEFINED_USER.email, name: PREDEFINED_USER.name }
      : null,
  };
}

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === "1";
}

export function getPredefinedUser() {
  return { email: PREDEFINED_USER.email, name: PREDEFINED_USER.name };
}

export { AUTH_COOKIE_NAME };


