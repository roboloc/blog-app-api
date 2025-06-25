import { NextFunction, Request, Response } from "express";
import { getSampleService } from "../sample/get-sample.service";
import { getSamplesService } from "../sample/get-samples.service";

export const getSamplesController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getSamplesService();
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getSampleController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = Number(request.params.id);
    const result = await getSampleService(id);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
