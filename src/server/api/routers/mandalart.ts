import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const mandalartRouter = createTRPCRouter({
  createMandalart: publicProcedure
    .input(z.object({ color: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const mandalart = await ctx.prisma.mandalart.create({
        data: {
          color: input.color || 'default',
          content: input.content,
          userId: '임시유저',
        },
      })

      return mandalart
    }),
  getMandalart: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const mandalart = await ctx.prisma.mandalart.findUnique({
        include: {
          goals: {
            include: {
              todos: true,
            },
          },
        },
        where: {
          id: input,
        },
      })

      return mandalart
    }),
  getMandalarts: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const mandalarts = await ctx.prisma.mandalart.findMany({
        include: {
          goals: {
            include: {
              todos: true,
            },
          },
        },
        where: {
          userId: input,
        },
      })

      return mandalarts
    }),
})
