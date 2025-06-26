import prisma from "../../config/prisma";
import { Blog } from "../../generated/prisma";
import { ApiError } from "../../utils/api-error";
import { generateSlug } from "../../utils/generate-slug";

export const createBlogService = async (body: Blog) => {
  const blog = await prisma.blog.findFirst({
    where: { title: body.title },
  });

  if (blog) {
    throw new ApiError("title already in use", 400);
  }
  //generate slug ke title
  const slug = generateSlug(body.title);

  await prisma.blog.create({
    data: { ...body, slug },
    //spread operator mencopy seluurh data yang ada di object body
  });

  return { message: "create blog success" };
};
