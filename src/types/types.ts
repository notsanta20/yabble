export interface Header {
  headers: { Authorization: string };
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

export interface BasicUser {
  id: string;
  username: string;
  profilePic: string | null;
}

export interface PostCompact {
  Likes: Array<object>;
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  time: string;
  userId: string;
  _count: Count;
  user: BasicUser;
}

interface Count {
  Likes: number;
  Comments: number;
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
