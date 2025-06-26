import prisma from "../../config/prisma";
import { Blog } from "../../generated/prisma";
import { ApiError } from "../../utils/api-error";

export const updateBlogService = async (id: number, body: Partial<Blog>) => {
  const findUser = await prisma.blog.findFirst({
    where: { id: id },
  });

  if (!findUser) {
    throw new ApiError("user does not exist", 400);
  }
  //cek title sudah ada atau belum
  if (body.title) {
    const cekTitleExist = await prisma.blog.findFirst({
      where: { title: body.title },
    });

    if (cekTitleExist) throw new ApiError("title already exist", 400);
  }
  await prisma.blog.update({
    where: { id: id },
    data: body,
  });
  return { message: "update article sucess" };
};
