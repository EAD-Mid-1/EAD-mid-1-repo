import {
  Container,
  Image,
  Box,
  VStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW="full" bg={"primary.100"}>
      <Container maxW="container.md" w="full" h="100vh">
        <VStack h="full" w="full" alignItems="center" justifyContent="center">
          <Box
            w="full"
            overflow={"hidden"}
            rounded="2xl"
            position="relative"
            backgroundImage="url('./bg')"
          >
            <VStack
              w="full"
              h="full"
              top={0}
              left={0}
              zIndex={10}
              color="black"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              padding={10}
              gap={5}
            >
              <Box
                w={"200px"}
                height={"200px"}
                overflow="hidden"
                rounded="xl"
              >
                <Image
                  src="./landing.jpg"
                  h="full"
                  w="full"
                  objectFit="cover"
                />
              </Box>
              <Heading
                fontSize={["2xl", "3xl", "5xl"]}
                fontWeight="bold"
                color="primary.500"
              >
                A Dedicated Team to Elevate Dream Shopping Center
              </Heading>
              <Text fontSize="xl" color="gray.600">
              As you step into the world of Dream Ahopping Center, you're not just a shopper; you're a valued member of our ever-growing community. Be part of a place where your shopping desires meet limitless choices, and where convenience meets quality. 
              </Text>
              <Button>Get Started</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
}

export default Hero;
