import bcrypt from "bcrypt";

const saltOrRounds = 8;

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 8);
  return hash;
};
