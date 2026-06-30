import bcrypt from "bcrypt";
import User from "./auth.model";

export async function registerUser(userid: string, password: string) {
  userid = userid.toLowerCase();

  const existingUser = await User.findOne({ userid });

  if (existingUser) {
    throw new Error("User ID already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    userid,
    password: hashedPassword,
  });

  return {
    userid: user.userid,
    profileCompleted: user.profileCompleted,
  };
}