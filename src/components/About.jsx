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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu.
              </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;
