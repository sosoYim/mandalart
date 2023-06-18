import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const mandalartMockRouter = createTRPCRouter({
  createMandalartMockData: publicProcedure.mutation(async ({ ctx }) => {
    const mandalArt1 = await ctx.prisma.mandalart.create({
      data: {
        color: 'blue',
        content: 'MandalArt 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '임라임',
      },
    })

    // Mock Goal data
    const goal1 = await ctx.prisma.goal.create({
      data: {
        color: 'green',
        content: 'Goal 1',
        createdAt: new Date(),
        isCompleted: false,
        mandalartId: mandalArt1.id,
        order: 1,
        updatedAt: new Date(),
      },
    })

    const goal2 = await ctx.prisma.goal.create({
      data: {
        color: 'yellow',
        content: 'Goal 2',
        createdAt: new Date(),
        isCompleted: false,
        mandalartId: mandalArt1.id,
        order: 2,
        updatedAt: new Date(),
      },
    })

    // Mock Todo data
    const todo11 = await ctx.prisma.todo.create({
      data: {
        content: 'Todo 1-1',
        createdAt: new Date(),
        goalId: goal1.id,
        isCompleted: false,
        order: 1,
        updatedAt: new Date(),
      },
    })

    const todo12 = await ctx.prisma.todo.create({
      data: {
        content: 'Todo 1-2',
        createdAt: new Date(),
        goalId: goal1.id,
        isCompleted: false,
        order: 2,
        updatedAt: new Date(),
      },
    })

    console.log('created mock data', mandalArt1, goal1, goal2, todo11, todo12)
  }),
  reset: publicProcedure.mutation(async ({ ctx }) => {
    await ctx.prisma.todo.deleteMany()
    await ctx.prisma.goal.deleteMany()
    await ctx.prisma.mandalart.deleteMany()
    console.log('reset mock data')
  }),
})
