import { Body, Box, Subhead } from "@spirokit/core";
import { createParam } from "solito";
import { TextLink } from "solito/link";

const { useParam } = createParam<{ id: string }>();

export function UserDetailScreen() {
  const [id] = useParam("id");

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Body
        textAlign="center"
        marginBottom={4}
        fontWeight="bold"
      >{`User ID: ${id}`}</Body>

      <TextLink href="/">
        <Subhead>👈 Go Home</Subhead>
      </TextLink>
    </Box>
  );
}
