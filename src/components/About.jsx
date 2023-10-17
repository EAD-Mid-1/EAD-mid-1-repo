import {
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="full" id="about">
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, 1, 1]} spacing={10}>
          <VStack gap={6} alignItems="center" textAlign="center">
            <Box>
              <Heading color="primary.500">ABOUT US</Heading>
            </Box>
            <Box w="full" h="full" rounded="lg" overflow="hidden">
              <Image src="./aboutus.jfif" w="full" h="full" objectFit="cover" />
            </Box>
            <Text fontSize="lg" mt="10px">
            Welcome to the Dream Shopping Center, where your retail fantasies come to life. At our shopping center, we're dedicated to creating an unparalleled shopping experience that transcends the ordinary. Our mission is to be more than just a place to shop; we aim to be a destination where you can explore, connect, and indulge in a world of fashion, food, entertainment, and culture. With visionary design, an array of top-notch stores, and a commitment to sustainability and community engagement, we've crafted a space that's not just a shopping center but a thriving hub of life and leisure. Join us on this journey, and let the Dream Shopping Center be your destination for inspiration, indulgence, and unforgettable memories. Come dream with us, and let your retail dreams take flight.
              </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;
