import { redirect } from "react-router-dom";

export const authProtection = () => {
  const token = localStorage.getItem("authToken");
  if (token !== "-NVyg7gFEEXA-lCYtCVz" || !token) {
    return redirect("/auth?mode=Login");
  }
  return null;
};
