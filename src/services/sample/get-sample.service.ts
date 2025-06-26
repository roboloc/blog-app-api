import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";

export const getSampleService = async (id: number) => {
  const sample = await prisma.sample.findMany({ where: { id: id } });
  if (!sample) {
    throw new ApiError("sample nout found", 404);
  }
  return sample;
};
