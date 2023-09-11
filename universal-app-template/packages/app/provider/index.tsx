import { SpiroKitProvider, useSpiroKitTheme } from '@spirokit/ui'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import myTheme from '../spirokit.theme'

export function Provider({ children }: { children: React.ReactNode }) {
  const theme = useSpiroKitTheme(myTheme)

  return (
    <SpiroKitProvider theme={theme}>
      <NavigationProvider>
        <Dripsy>{children}</Dripsy>
      </NavigationProvider>
    </SpiroKitProvider>
  )
}
