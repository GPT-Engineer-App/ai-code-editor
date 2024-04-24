// AI Code Editor website implementation using Chakra UI and React Icons
import { Box, Button, Flex, Heading, Input, Link, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaRobot, FaBook, FaPhone, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* Header */}
      <Box bg="blue.600" p={4} color="white">
        <Flex align="center" justify="space-between">
          <Heading as="h1" size="xl">
            AI Code Editor <FaCode />
          </Heading>
          <Button leftIcon={<FaRobot />} colorScheme="pink" variant="solid">
            Try AI Features
          </Button>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex flex="1" overflow="hidden">
        {/* Sidebar for AI Options */}
        <VStack bg="gray.100" p={4} w="250px" spacing={4} align="stretch">
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="outline">
            Refactor Code
          </Button>
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="outline">
            Optimize Logic
          </Button>
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="outline">
            Generate Tests
          </Button>
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="outline">
            Debug Code
          </Button>
        </VStack>

        {/* Code Editor Area */}
        <Box flex="1" p={4}>
          <Textarea placeholder="Type your code here..." minHeight="100%" />
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" p={4} color="gray.300">
        <Flex justify="space-between" align="center">
          <Text>© 2023 AI Code Editor</Text>
          <Flex>
            <Link href="#" isExternal mx={2}>
              <FaBook /> Documentation
            </Link>
            <Link href="#" isExternal mx={2}>
              <FaPhone /> Contact Us
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
