import Settings from "../dto/settings.dto";

class SettingService {
  async getAllSetting() {
    return await Settings.findAll();
  }

  async checkValidDomain(requestHost: string) {
    const settings = await Settings.findAll();
    return settings.length && settings[0].setting === requestHost;
  }
}

export default new SettingService();
