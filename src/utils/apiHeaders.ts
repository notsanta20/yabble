import Cookies from "js-cookie";

const token: string | undefined = Cookies.get("token");

const Authorization: string =
  typeof token === "undefined" ? "bearer" : `Bearer ${token}`;

export const header = {
  headers: { Authorization },
};
