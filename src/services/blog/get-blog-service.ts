import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";

export const getBlogService = async (id: number) => {
  const user = await prisma.blog.findFirst({
    where: { id: id },
  });
  if (!user) {
    throw new ApiError("user not found", 400);
  }
  return user;
};
