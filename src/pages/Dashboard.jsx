import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles ={
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      filter: "none",
      cursor: "pointer",
    }
  }
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Dashboard</Heading>
      <Text marginLeft="30px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sed!</Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sed!</Text>
      <Box my="30px" p="20px" color="white" bg="orange.300" >
        <Text>This is a box.</Text>
      </Box>
      <Box sx={boxStyles} >
        This is for the sx styling.
      </Box>
    </Container>
  )
}
 