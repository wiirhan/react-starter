import { createRouter, RouterProvider } from '@tanstack/react-router'

import { queryClient } from '@/helpers/react-query'

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, context: { queryClient } })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />
}
