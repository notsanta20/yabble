import Cookies from "js-cookie";
import axios from "axios";
import type {
  AddLikeProps,
  AddCommentsProps,
  EditBioProps,
  Header,
  Message,
} from "../../types/types";

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

export async function addCommentsApi(data: AddCommentsProps) {
  return await axios.put(
    `${url}/post/${data.postId}/add-comment`,
    data.commentData,
    data.header
  );
}

export async function editBioApi(data: EditBioProps) {
  return await axios.put(`${url}/edit-user`, data.editedData, data.header);
}

export async function sendMessageApi({
  userId,
  text,
  image,
  header,
}: {
  userId: string;
  text: Message | undefined;
  image: string | undefined;
  header: Header;
}) {
  const data = {
    receiverId: userId,
    message: text?.message,
    image: image,
  };
  return await axios.put(`${url}/messages`, data, header);
}
