export function validatePassword(password: string) {
    return typeof password === "string" && password.trim().length >= 6;
  }
  