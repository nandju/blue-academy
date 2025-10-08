import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "blue_auth";

// Predefined internal credentials
const PREDEFINED_USER = {
  email: "etudiant@blue-academy.ci",
  password: "blue12345",
  name: "Jean Dupont",
};

const ADMIN_USER = {
  email: "admin@blue-academy.ci",
  password: "admin2024",
  name: "Administrateur",
  role: "admin",
};

export function validateCredentials(email: string, password: string) {
  const emailLower = email.trim().toLowerCase();
  
  // Check student credentials
  if (emailLower === PREDEFINED_USER.email && password === PREDEFINED_USER.password) {
    return {
      valid: true,
      user: { email: PREDEFINED_USER.email, name: PREDEFINED_USER.name, role: "student" },
    };
  }
  
  // Check admin credentials
  if (emailLower === ADMIN_USER.email && password === ADMIN_USER.password) {
    return {
      valid: true,
      user: { email: ADMIN_USER.email, name: ADMIN_USER.name, role: "admin" },
    };
  }
  
  return {
    valid: false,
    user: null,
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

export function getAdminUser() {
  return { email: ADMIN_USER.email, name: ADMIN_USER.name, role: ADMIN_USER.role };
}

export { AUTH_COOKIE_NAME };


