import {
  SimpleGrid,
  Text,
  Heading,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";
import { Activity, Building, Cable, Clock, GraduationCap, ShieldCheck } from "lucide-react";

function Services() {
  return (
    <Container maxW="full" id="services" bg="white">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={20}>
          <Box textAlign="center" fontWeight="bold">
            <Heading color="primary.500">Features</Heading>
          </Box>
          <SimpleGrid columns={[1, 2, 2]} spacing={10}>
            <VStack
              alignItems="flex-start"
              bg="white"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                
              </Box>
              <Heading fontSize="xl">Clean Food Court</Heading>
              <Text color="gray.500">
                A clean food court ensures a hygienic and enjoyable dining experience for all."
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              bg="white"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                
              </Box>
              <Heading fontSize="xl">Building structures</Heading>
              <Text color="gray.500">
              Building structures encompass the physical framework and architecture that shape our urban and rural environments
              </Text>
            </VStack>

            <VStack
              alignItems="flex-start"
              bg="white"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                
              </Box>
              <Heading fontSize="xl">Entertainment</Heading>
              <Text color="gray.500">
              "Entertainment transports us to worlds of imagination and emotion, providing moments of joy and escap
              </Text>
            </VStack>
            <VStack
              alignItems="flex-start"
              bg="white"
              rounded="lg"
              py={4}
              px={8}
              gap={2}
            >
              <Box color="primary.500">
                
              </Box>
              <Heading fontSize="xl">Local and International Brand</Heading>
              <Text color="gray.500">
              Local brands showcase the heart of our community, while international brands bring the world's diversity to your doorstep
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Container>
  );
}

export default Services;
