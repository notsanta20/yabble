export interface Header {
  headers: { Authorization: string };
}

export interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export interface SignFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface EditFormData {
  bio: string;
}

export interface AddLikeProps {
  id: string;
  header: Header;
}

export interface AddCommentsProps {
  commentData: UserComment;
  postId: string;
  header: Header;
}

interface Bio {
  bio: string;
}

export interface SendMessageProps {
  messageData: Message;
  postId: string;
  header: Header;
}

export interface EditBioProps {
  editedData: Bio;
  header: Header;
}

export interface BasicUser {
  id: string;
  username: string;
  profilePic: string | null;
}

interface Count {
  Likes: number;
  Comments: number;
}

export interface Post {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  time: string;
  userId: string;
  _count: Count;
  user: BasicUser;
  Likes: Array<Like>;
  Comments?: Array<Comment>;
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
  Posts?: Post;
}

export interface Comment {
  id: string;
  comment: string;
  time: string;
  userId: string;
  postId: string;
  user: BasicUser;
  Posts?: Post;
}

export interface FindFriendsUser {
  id: string;
  username: string;
  profilePic: string | null;
  myRequests: Array<object>;
  userRequests: Array<object>;
  myFriends: Array<object>;
  followers: Array<object>;
}

export interface UserComment {
  comment: string;
}

export interface User {
  id: string;
  username: string;
  profilePic: string | null;
  bio: string | null;
  myRequests: Array<object>;
  userRequests: Array<object>;
  myFriends: Array<object>;
  followers: Array<object>;
  Posts: Array<Post>;
  Likes: Array<Like>;
  Comments: Array<Comment>;
}

export interface Message {
  message: string;
}

export interface FriendList {
  id: string;
  userA?: BasicUser;
  userB?: BasicUser;
  userAId: string;
  userBId: string;
}

export interface Chat {
  id: string;
  message: string | null;
  image: string | null;
  time: string;
  receiverId: string;
  senderId: string;
  contactId: string;
}
