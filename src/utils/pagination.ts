export const paginate = (page: string | number = 1, limit: number = 10) => {
  if (limit <= 0 || Number(page) <= 0) return { offset: 0, limit };

  return { offset: (Number(page) - 1) * limit, limit };
};
