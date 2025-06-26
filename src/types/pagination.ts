export interface PaginatonQueryParams {
  page: number;
  take: number; //itu limit dalam prisma
  sortBy: string;
  sortOrder: string;
  search: string;
}
