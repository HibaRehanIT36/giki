import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const InterestsDialog = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1} p={15} pb={0}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default InterestsDialog;
