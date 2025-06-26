import { title } from "process";
import prisma from "../../config/prisma";
import { Prisma } from "../../generated/prisma";
import { PaginatonQueryParams } from "../../types/pagination";
import { ApiError } from "../../utils/api-error";

export const getBlogsService = async (query: PaginatonQueryParams) => {
  const { page, take, sortBy, sortOrder, search } = query;

  const whereClause: Prisma.BlogWhereInput = {};

  if (search) {
    whereClause.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }
  // if (search) {
  //   whereClause.title = { contains: search, mode: "insensitive" };
  // }

  const blogs = await prisma.blog.findMany({
    where: whereClause,
    take: take, //di raw sql = limit take tapi di prisma namanya take
    skip: (page - 1) * take, //di raw sql =  sama dengan offset misalnya tapi di prisma itu adalah skip
    orderBy: { [sortBy]: sortOrder },
  });

  const count = await prisma.blog.count({ where: whereClause });

  if (!blogs) {
    throw new ApiError("there is no article", 400);
  }
  //membuat pagination

  return {
    data: blogs,
    meta: { page, take, total: count },
  };
};

//structure pagination
// localhost:8000/blogs?page=2&limit=5
