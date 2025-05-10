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

export interface activeUser {
  id: string;
  username: string;
  profilePic: string | null;
}
