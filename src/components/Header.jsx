import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" width="full" bg="blue.800" p={4} color="white">
      <Heading size="lg">My React App</Heading>
    </Box>
  );
};

export default Header;
