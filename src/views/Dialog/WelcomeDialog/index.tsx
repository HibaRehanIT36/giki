import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const WelcomeDialog = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1} p={15} pb={1}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default WelcomeDialog;
