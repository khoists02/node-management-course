export interface UserModel {
  id?: string;
  username?: string;
  name?: string;
  password?: string;
  passwordcompare?: string;
  email?: string;
  roleIds?: string[];
}

export interface UserResponse {
  id?: string;
  username?: string;
  name?: string;
}
