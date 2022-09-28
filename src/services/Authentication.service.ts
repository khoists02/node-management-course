import User from "../dto/users.dto";

class AuthenticationService {
  async getUserByUserName(username: string) {
    return await User.findOne({ where: { name: username } });
  }
}

export default new AuthenticationService();
