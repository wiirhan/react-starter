import { QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import { useHydrateAtoms } from 'jotai/react/utils'
import { queryClientAtom } from 'jotai-tanstack-query'
import type { PropsWithChildren, ReactNode } from 'react'
import { Suspense } from 'react'
import type { FallbackProps } from 'react-error-boundary'
import { ErrorBoundary } from 'react-error-boundary'

import { GeneralError } from '@/components/general-error'
import { store } from '@/helpers/jotai'
import { queryClient } from '@/helpers/react-query'

type AppProviderProps = {
  children: ReactNode
}

const ErrorFallback = ({ error: _ }: FallbackProps) => <GeneralError />

function HydrateAtoms({ children }: PropsWithChildren) {
  useHydrateAtoms([[queryClientAtom, queryClient]])
  return <>{children}</>
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <JotaiProvider store={store}>
            <HydrateAtoms>
              {children}
            </HydrateAtoms>
          </JotaiProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  )
}
