import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";

export const getBlogsService = async () => {
  const result = await prisma.blog.findMany();
  if (!result) {
    throw new ApiError("there is no article", 400);
  }
  return result;
};
