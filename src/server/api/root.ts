import { mandalartMockRouter, mandalartRouter } from '@/server/api/routers'
import { createTRPCRouter } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mandalart: mandalartRouter,
  mock: mandalartMockRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
