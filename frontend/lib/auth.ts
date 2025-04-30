import api from "./api";
import { validateUsername } from "@/utils/validateUsername";
import { validatePassword } from "@/utils/validatePassword";

export const login = async (rawUsername: string, password: string) => {
  const username = rawUsername.trim(); // Trim once

  // Input validation
  const isValidUser = validateUsername(username);
  const isValidPass = validatePassword(password);

  if (!isValidUser || !isValidPass) {
    throw new Error("Invalid username or password");
  }

  try {
    const response = await api.post(
      "/login/",
      {
        username,
        password,
      },
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    return response.data;
  } catch {
    throw new Error("Invalid username or password");
  }
  
};


export const logout = async () => {
  await api.post("/logout/");
};

export const getMe = async () => {
  const res = await api.get("/me/", {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  });
  return res.data;
};