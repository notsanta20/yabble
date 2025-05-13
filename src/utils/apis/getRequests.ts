import Cookies from "js-cookie";
import axios from "axios";

const url: string = "http://localhost:3000";
const token: string | undefined = Cookies.get("token");
const Authorization: string =
  typeof token === "undefined" ? "unauthorized" : `Bearer ${token}`;
const header = {
  headers: { Authorization },
};

export async function activeUsersApi() {
  const data = await axios.get(`${url}/active-users`, header);

  return data;
}

export async function allPostsApi() {
  const data = await axios.get(`${url}/posts`, header);

  return data;
}
