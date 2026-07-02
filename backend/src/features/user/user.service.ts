import User from "../auth/auth.model";

export async function updateProfile(userId: string, data: any) {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      ...data,
      profileCompleted: true,
    },
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");

  return user;
}