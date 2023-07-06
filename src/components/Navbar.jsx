import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Spacer,
    Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@gmail.com</Text>
        <Button colorScheme="purple">Log Out</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
