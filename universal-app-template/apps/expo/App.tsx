import { usePoppins } from '@spirokit/native'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'

export default function App() {
  const fontLoaded = usePoppins()

  if (!fontLoaded) return <></>

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
