export interface UserModel {
  id?: string;
  name?: string;
  password?: string;
  passwordCompare?: string;
}

export interface UserResponse {
  username?: string;
  password?: string;
}
