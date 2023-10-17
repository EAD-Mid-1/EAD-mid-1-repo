import { Container, Avatar, Heading, Text, VStack } from "@chakra-ui/react";

function Testimonial() {
  return (
    <Container maxW="full" bg="primary.100">
      <Container maxW="container.lg" py={20}>
        <VStack justifyContent="center" alignItems="center" textAlign="center">
          <Avatar src="./main_img.jpeg" size="2xl" />
          <Heading mt={2} color="primary.500">David</Heading>
          <Text fontSize="xl" mt={5} color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu.
          </Text>
        </VStack>
      </Container>
    </Container>
  );
}

export default Testimonial;
