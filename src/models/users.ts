export interface UserModel {
  id?: string;
  name?: string;
  password?: string;
  passwordCompare?: string;
  email?: string;
}

export interface UserResponse {
  username?: string;
  email?: string;
}
