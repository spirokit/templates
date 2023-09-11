import { Body, Button, Center, useColorModeValue } from '@spirokit/ui'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  const backgroundColor = useColorModeValue('$white', '$primaryDark.0')

  return (
    <Center
      space="$4"
      flex={1}
      padding={'$4'}
      backgroundColor={backgroundColor}
    >
      <Body textAlign="center">{`User ID: ${id}`}</Body>
      <Button onPress={() => link.onPress()}>{'👈  Go Home'}</Button>
    </Center>
  )
}
