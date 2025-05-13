import Cookies from "js-cookie";
import axios from "axios";
import type { Header } from "../../types/types";

const url: string = "http://localhost:3000";

export function getHeader() {
  const token: string | undefined = Cookies.get("token");

  const Authorization: string =
    typeof token === "undefined" ? "unauthorized" : `Bearer ${token}`;

  return {
    headers: { Authorization },
  };
}

export async function activeUsersApi(header: Header) {
  const data = await axios.get(`${url}/active-users`, header);

  return data;
}

export async function allPostsApi(header: Header) {
  const data = await axios.get(`${url}/posts`, header);

  return data;
}

export async function getAllUsersApi(header: Header) {
  const data = await axios.get(`${url}/all-users`, header);
  return data;
}
