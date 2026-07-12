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

  console.log("========== LOGIN ==========");
  console.log("Incoming userid:", userid);
  console.log("Incoming password:", password);

  const user = await User.findOne({ userid });

  console.log("User found:", !!user);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  console.log("Stored hash:", user.password);

  const valid = await bcrypt.compare(password, user.password);

  console.log("Password match:", valid);

  if (!valid) {
    throw new Error("Invalid credentials");
  }

  return user;
}