import {
  Image,
  Center,
  VStack,
  TitleOne,
  useColorModeValue,
  Button,
} from '@spirokit/ui'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const backgroundColor = useColorModeValue('$white', '$primaryDark.0')
  const detailsLink = useLink({
    href: '/user/spirokit',
  })
  return (
    <Center flex={1} padding={'$4'} backgroundColor={backgroundColor}>
      <VStack alignItems={'center'} space={'$4'}>
        <Image
          alt="SpiroKit logo"
          height={150}
          width={150}
          resizeMode="contain"
          source={{ uri: 'https://i.imgur.com/TvHaA0H.png' }}
        ></Image>
        <TitleOne>Welcome to SpiroKit</TitleOne>

        <Button onPress={detailsLink.onPress}>Go to details</Button>
      </VStack>
    </Center>
  )
}
