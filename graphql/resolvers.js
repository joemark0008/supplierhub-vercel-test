// import prisma from "../lib/prisma"

export const resolvers = {
  Query: {
    Users: async (_parents, args, context) =>
      await context.prisma.user.findMany(),
  },
};
