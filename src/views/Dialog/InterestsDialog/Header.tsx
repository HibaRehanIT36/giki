import React from "react";
import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Text
      fontSize="2xl"
      variant="filled"
      textAlign="center"
      color="brand.secondary"
      fontFamily="Poppins"
      maxW="300px"
      alignSelf="center"
    >
      Tell us what you’re interested in
    </Text>
  );
};

export default Header;
