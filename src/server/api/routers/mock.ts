import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const mandalartMockRouter = createTRPCRouter({
  reset: publicProcedure.mutation(async ({ ctx }) => {
    await ctx.prisma.todo.deleteMany();
    await ctx.prisma.goal.deleteMany();
    await ctx.prisma.mandalart.deleteMany();
    console.log("reset mock data");
  }),
  createMandalartMockData: publicProcedure.mutation(async ({ ctx }) => {
    const mandalArt1 = await ctx.prisma.mandalart.create({
      data: {
        userId: "임라임",
        content: "MandalArt 1",
        color: "blue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Mock Goal data
    const goal1 = await ctx.prisma.goal.create({
      data: {
        mandalartId: mandalArt1.id,
        content: "Goal 1",
        isCompleted: false,
        color: "green",
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 1,
      },
    });

    const goal2 = await ctx.prisma.goal.create({
      data: {
        mandalartId: mandalArt1.id,
        content: "Goal 2",
        isCompleted: false,
        color: "yellow",
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 2,
      },
    });

    // Mock Todo data
    const todo11 = await ctx.prisma.todo.create({
      data: {
        goalId: goal1.id,
        content: "Todo 1-1",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 1,
      },
    });

    const todo12 = await ctx.prisma.todo.create({
      data: {
        goalId: goal1.id,
        content: "Todo 1-2",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        order: 2,
      },
    });

    console.log("created mock data", mandalArt1, goal1, goal2, todo11, todo12);
  }),
});
