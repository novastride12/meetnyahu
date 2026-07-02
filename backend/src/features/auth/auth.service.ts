import bcrypt from "bcrypt";
import User from "./auth.model";

export async function registerUser(userid: string, password: string) {
  userid = userid.toLowerCase();

  const existing = await User.findOne({ userid });

  if (existing) {
    throw new Error("User ID already exists");
  }

  const hashed = await bcrypt.hash(password, 12);

  const user = await User.create({
    userid,
    password: hashed,
  });

  return user;
}

export async function loginUser(userid: string, password: string) {
  userid = userid.toLowerCase();

  const user = await User.findOne({ userid });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error("Invalid credentials");
  }

  return user;
}