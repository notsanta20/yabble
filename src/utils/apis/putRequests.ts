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

export async function addLikeApi(id: string, header: Header) {
  const postData = {
    postId: id,
  };
  const data = await axios.put(`${url}/post/like`, postData, header);

  return data;
}
