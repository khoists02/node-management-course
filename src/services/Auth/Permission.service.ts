import Permissions from "../../dto/permission.dto";
import AuthenticationError from "../../errors/AuthenticationError";

class PermissionsService {
  async GetAll() {
    try {
      return await Permissions.findAll();
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }
}

export default new PermissionsService();
