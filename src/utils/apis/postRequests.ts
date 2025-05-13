import Cookies from "js-cookie";
import axios from "axios";
import type { LoginFormData, SignFormData } from "../../types/types";

const url: string = "http://localhost:3000";
const token: string | undefined = Cookies.get("token");
const Authorization: string =
  typeof token === "undefined" ? "unauthorized" : `Bearer ${token}`;
const header = {
  headers: { Authorization },
};

export async function loginApi(formData: LoginFormData) {
  const data = await axios.post(`${url}/login`, formData, header);

  return data;
}

export async function signupApi(formData: SignFormData) {
  const data = await axios.post(`${url}/signup`, formData, header);

  return data;
}
