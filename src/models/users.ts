export interface UserModel {
  id?: string;
  name?: string;
  password?: string;
  passwordCompare?: string;
  email?: string;
  roleIds?: string[];
}

export interface UserResponse {
  id?: string;
  username?: string;
  email?: string;
}
