import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        p={{ base: "20px", lg: "30px" }}
        as="aside"
        bg="brand.600"
        minHeight={{ lg: "100vh" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" p="40px" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
