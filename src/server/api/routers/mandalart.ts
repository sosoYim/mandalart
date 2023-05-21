import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const mandalartRouter = createTRPCRouter({
  createMandalart: publicProcedure.input(z.object({content: z.string(), color: z.string()})).mutation(async({ctx, input}) => {
    const mandalart = await ctx.prisma.mandalart.create({
      data: {
        userId: '임시유저',
        content: input.content,
        color: input.color || 'default',
      }
    });
    
    return mandalart;
  }),
  getMandalart: publicProcedure.input(z.number()).query(async({ctx, input}) => {
    const mandalart = await ctx.prisma.mandalart.findUnique({
      where: {
        id: input,
      },
      include: {
        goals: {
          include: {
            todos: true,
          },
        },
      },
    });
    
    return mandalart;
  })
});
