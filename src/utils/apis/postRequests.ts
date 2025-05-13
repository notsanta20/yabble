import Cookies from "js-cookie";
import axios from "axios";
import type { Header, LoginFormData, SignFormData } from "../../types/types";

const url: string = "http://localhost:3000";

export function getHeader() {
  const token: string | undefined = Cookies.get("token");

  const Authorization: string =
    typeof token === "undefined" ? "unauthorized" : `Bearer ${token}`;

  return {
    headers: { Authorization },
  };
}

export async function loginApi(formData: LoginFormData, header: Header) {
  const data = await axios.post(`${url}/login`, formData, header);

  return data;
}

export async function signupApi(formData: SignFormData, header: Header) {
  const data = await axios.post(`${url}/signup`, formData, header);

  return data;
}

export async function sendRequestApi(userId: string, header: Header) {
  const data = await axios.post(
    `${url}/send-request`,
    { receiverId: userId },
    header
  );
  return data;
}

export async function addFriendApi(userId: string, header: Header) {
  const data = await axios.post(
    `${url}/add-friend`,
    { receiverId: userId },
    header
  );
  return data;
}
