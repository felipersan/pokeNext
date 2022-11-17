import type { AppProps } from 'next/app'
import { useRef } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const queryClient = useRef(new QueryClient())
  return (
    <QueryClientProvider client={queryClient.current}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
