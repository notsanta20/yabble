import type { FindFriendsUser, Header } from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getHeader,
  sendRequestApi,
  addFriendApi,
} from "../../../utils/apis/postRequests";
import alert from "../alert/alert";

function Button({ text, callback }: { text: string; callback?: Function }) {
  return (
    <button
      className={
        "font-[Syncopate] text-white text-xs font-bold p-3 rounded-2xl border-2 border-(--glass-border-light) " +
        (callback && "hover:bg-(--glass-fill-light) cursor-pointer")
      }
      onClick={() => {
        callback && callback();
      }}
    >
      {text}
    </button>
  );
}

function RequestButton({ user }: { user: FindFriendsUser }) {
  const queryClient = useQueryClient();
  const header = getHeader();

  const sendRequest = useMutation({
    mutationKey: ["sendRequest"],
    mutationFn: ({ id, header }: { id: string; header: Header }) => {
      return sendRequestApi(id, header);
    },
    onSettled: (error) => {
      if (error) {
        alert(error.response.data.message);
      } else {
        queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      }
    },
  });

  const addFriend = useMutation({
    mutationKey: ["addFriend"],
    mutationFn: ({ id, header }: { id: string; header: Header }) => {
      return addFriendApi(id, header);
    },
    onSettled: (error) => {
      if (error) {
        alert(error.response.data.message);
      } else {
        queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      }
    },
  });

  function handleSendRequest(id: string) {
    sendRequest.mutate({ id, header });
  }

  function handleAddFriend(id: string) {
    addFriend.mutate({ id, header });
  }

  if (user.userRequests.length === 0 && user.myRequests.length === 0) {
    return (
      <Button
        text="SEND REQUEST"
        callback={() => {
          handleSendRequest(user.id);
        }}
      />
    );
  }

  if (user.myRequests.length > 0) {
    return (
      <Button
        text="ACCEPT REQUEST"
        callback={() => {
          handleAddFriend(user.id);
        }}
      />
    );
  }

  if (user.userRequests.length > 0) {
    return <Button text="REQUEST IS PENDING" />;
  }
}

export default RequestButton;
