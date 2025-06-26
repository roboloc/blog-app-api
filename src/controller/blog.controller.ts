import { NextFunction, Request, Response } from "express";
import { createBlogService } from "../services/blog/create-blog.service";
import { getBlogsService } from "../services/blog/get-blogs-service";
import { getBlogService } from "../services/blog/get-blog-service";
import { updateBlogService } from "../services/blog/update-blog.service";

export const getBlogsController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getBlogsService();
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getBlogController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = Number(request.params.id);
    const result = await getBlogService(id);
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
