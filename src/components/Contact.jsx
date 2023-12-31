import {
  VStack,
  Container,
  Heading,
  Input,
  Text,
  Button,
  Textarea,
  Box
} from "@chakra-ui/react";

function Contact() {
  return (
    <Container maxW="full" id="contact" bg="primary.100">
      <Container maxW="container.lg" py={20}>
        <VStack justifyContent="center" alignItems="center" textAlign="center" gap={10}>
          <Box>
            <Heading color="primary.500">Contact Us</Heading>
            
          </Box>
          <VStack spacing={4} w="full" maxW="sm" alignItems="flex-start">
            <Input placeholder="Enter your name" w="full" maxW="sm" bg="white" />
            <Input placeholder="Enter your email" w="full" maxW="sm" bg="white" />
            <Textarea
              placeholder="Enter your message"
              w="full"
              maxW="sm"
              resize="none"
              bg="white"
            />
            <Button colorScheme="primary" w="full" maxW="sm">
              Submit
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
}

export default Contact;
