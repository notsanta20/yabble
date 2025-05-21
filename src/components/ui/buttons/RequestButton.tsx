import type {
  Error,
  FindFriendsUser,
  Header,
  User,
} from "../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getHeader,
  sendRequestApi,
  addFriendApi,
} from "../../../utils/apis/postRequests";
import alert from "../alert/alert";
import ButtonFunc from "./ButtonFunc";

function RequestButton({ user }: { user: FindFriendsUser | User }) {
  const queryClient = useQueryClient();
  const header = getHeader();

  const sendRequest = useMutation({
    mutationKey: ["sendRequest"],
    mutationFn: ({ id, header }: { id: string; header: Header }) => {
      return sendRequestApi(id, header);
    },
    onError: (error: Error) => {
      if (error) {
        alert(error.response.data.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const addFriend = useMutation({
    mutationKey: ["addFriend"],
    mutationFn: ({ id, header }: { id: string; header: Header }) => {
      return addFriendApi(id, header);
    },
    onError: (error: Error) => {
      if (error) {
        alert(error.response.data.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  function handleSendRequest(id: string) {
    sendRequest.mutate({ id, header });
  }

  function handleAddFriend(id: string) {
    addFriend.mutate({ id, header });
  }

  if (user.followers.length > 0 || user.myFriends.length > 0) {
    return <ButtonFunc text="FOLLOWING" isPending={false} />;
  }

  if (user.userRequests.length === 0 && user.myRequests.length === 0) {
    return (
      <ButtonFunc
        text="SEND REQUEST"
        callback={(e) => {
          e.stopPropagation();
          handleSendRequest(user.id);
        }}
        isPending={sendRequest.isPending}
      />
    );
  }

  if (user.myRequests.length > 0) {
    return (
      <ButtonFunc
        text="ACCEPT REQUEST"
        callback={(e) => {
          e.stopPropagation();
          handleAddFriend(user.id);
        }}
        isPending={addFriend.isPending}
      />
    );
  }

  if (user.userRequests.length > 0) {
    return <ButtonFunc text="REQUEST IS PENDING" isPending={false} />;
  }
}

export default RequestButton;
