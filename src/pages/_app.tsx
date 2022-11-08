import type { AppProps } from 'next/app'
import { useRef } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const queryClient = useRef(new QueryClient())
  return (
    <QueryClientProvider client={queryClient.current}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
