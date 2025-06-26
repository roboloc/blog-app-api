import { NextFunction, Request, Response } from "express";
import { createBlogService } from "../services/blog/create-blog.service";
import { getBlogsService } from "../services/blog/get-blogs.service";

import { updateBlogService } from "../services/blog/update-blog.service";
import { getBlogbySlugService } from "../services/blog/get-blog-by-slug.service";

export const getBlogsController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const query = {
      page: parseInt(request.query.page as string) || 1,
      take: parseInt(request.query.take as string) || 5,
      sortOrder: (request.query.sortOrder as string) || "desc",
      sortBy: (request.query.sortBy as string) || "createdAt",
      search: (request.query.search as string) || "",
    };

    const result = await getBlogsService(query);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getBlogbySlugController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const slug = request.params.slug;
    const result = await getBlogbySlugService(slug);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const createBlogController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await createBlogService(request.body);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateBlogController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = Number(request.params.id);
    const body = request.body;
    const result = await updateBlogService(id, body);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
