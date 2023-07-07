import {
  Avatar,
    AvatarBadge,
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Spacer,
    Text,
    useToast,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const toast = useToast();
  const showToast = ()=>{
    toast({
      title: 'Logget out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon/>
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center" marginBottom="40px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="mario" bg="purple" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast} >Log Out</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
