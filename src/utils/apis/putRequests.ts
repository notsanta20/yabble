import Cookies from "js-cookie";
import axios from "axios";
import type { Header } from "../../types/types";

interface AddLikeProps {
  id: string;
  header: Header;
}

const url: string = "http://localhost:3000";

export function getHeader() {
  const token: string | undefined = Cookies.get("token");

  const Authorization: string =
    typeof token === "undefined" ? "unauthorized" : `Bearer ${token}`;

  return {
    headers: { Authorization },
  };
}

export async function addLikeApi(data: AddLikeProps) {
  const postData = {
    postId: data.id,
  };
  const promise = await axios.put(`${url}/post/like`, postData, data.header);

  return promise;
}
