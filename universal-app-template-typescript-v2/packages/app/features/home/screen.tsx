import { TitleOne, VStack, Image, Center, Button } from "@spirokit/ui";
import { useLink } from "solito/link";

export function HomeScreen() {
  const userLink = useLink({
    href: "/user/mauro",
  });

  return (
    <Center flex={1} padding={4}>
      <VStack alignItems={"center"} space={4}>
        <Image
          height={200}
          width={200}
          resizeMode="contain"
          source={{ uri: "https://i.imgur.com/TvHaA0H.png" }}
        ></Image>
        <TitleOne>Welcome to SpiroKit</TitleOne>
        <Button {...userLink} size="sm">
          Navigate to details
        </Button>
      </VStack>
    </Center>
  );
}
