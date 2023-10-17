import { Container, Avatar, Heading, Text, VStack } from "@chakra-ui/react";

function Testimonial() {
  return (
    <Container maxW="full" bg="primary.100">
      <Container maxW="container.lg" py={20}>
        <VStack justifyContent="center" alignItems="center" textAlign="center">
          <Avatar src="./main_img.jpeg" size="2xl" />
          <Heading mt={2} color="primary.500">David</Heading>
          <Text fontSize="xl" mt={5} color="gray.600">
          As the owner of the Dream Shopping Center, I'm dedicated to redefining the retail experience. We're more than just a shopping destination; we're a hub of innovation, sustainability, and community engagement. Join us in turning your shopping dreams into reality. Welcome to the Dream Shopping Center.
          </Text>
        </VStack>
      </Container>
    </Container>
  );
}

export default Testimonial;
