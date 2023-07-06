import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem colSpan={{ base: 6, lg: 2, xl: 1 }} p={{ base: "20px", lg: "30px" }} as="aside" bg="purple.400" minHeight={{ lg: "100vh"}}>
        <span>Side Bar</span>
      </GridItem>
      <GridItem as="main" p="40px" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
