import '../public/fonts.css'
import '@tamagui/core/reset.css'
import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useMemo } from 'react'
import type { SolitoAppProps } from 'solito'
import { useSpiroKitTheme } from '@spirokit/ui'
import { NextSpiroKitProvider } from '@spirokit/web'
import myTheme from 'app/spirokit.theme'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const theme = useSpiroKitTheme(myTheme)

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps])

  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSpiroKitProvider theme={theme}>
        <Provider>{contents}</Provider>
      </NextSpiroKitProvider>
    </>
  )
}

export default MyApp
