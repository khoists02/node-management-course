import { v4 as uuidv4 } from "uuid";
import { RoleRequest } from "../../models/roles";
import Roles from "../../dto/roles.dto";
import ApplicationError from "../../errors/ApplicationError";
import { ERROR } from "../../helpers/errors";
import AuthenticationError from "../../errors/AuthenticationError";
import UserRoles from "../../dto/users_roles.dto";
import { getFunctionPromiseMapping } from "../../helpers";
class RolesService {
  async getRoles() {
    return await Roles.findAll();
  }

  async getRole(roleId: string) {
    try {
      return await Roles.findByPk(roleId);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async createRole(role: RoleRequest) {
    try {
      if (!role.name) throw new ApplicationError(ERROR.ERROR_ROLE_NAME_NULL);
      const roleResponse = await Roles.create({
        id: uuidv4(),
        name: role.name,
      } as any);
      return roleResponse;
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async updateRole(roleId: string, body: RoleRequest) {
    try {
      const findRole = await Roles.findByPk(roleId);
      if (!findRole)
        throw new ApplicationError(ERROR.ERROR_TENANT_USER_NOT_FOUND);
      return await findRole.update(body);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async deleteRole() {}

  async setDefaultRole(userId: string, nameRole: string) {
    try {
      const findRole = await Roles.findOne({ where: { name: nameRole } });
      if (!findRole)
        throw new AuthenticationError(
          ERROR.ERROR_ACCOUNT_KEYCLOAK_REQUEST_FAILED
        );

      await UserRoles.create({
        id: uuidv4(),
        userId,
        roleId: findRole.id,
      });

      return findRole.name;
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }

  async getNameRoleById(roleId: string) {
    try {
      const findRole = await Roles.findByPk(roleId);
      if (!findRole)
        throw new AuthenticationError(
          ERROR.ERROR_ACCOUNT_KEYCLOAK_REQUEST_FAILED
        );

      return findRole.name;
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }
  async findAllRoleByUserId(userId: string) {
    try {
      const usersRoles = await UserRoles.findAll({ where: { userId: userId } });
      const roleIds = usersRoles.map((x) => x.roleId);
      const promiseItems = roleIds.map((roleId) => {
        const rolePromise = Roles.findByPk(roleId);
        return rolePromise;
      });
      const rolesPromise = await getFunctionPromiseMapping(promiseItems);
      return roleIds.map((item, index) => {
        return rolesPromise[index]?.name;
      });
    } catch (error) {
      throw new ApplicationError(error);
    }
  }
}

export default new RolesService();
