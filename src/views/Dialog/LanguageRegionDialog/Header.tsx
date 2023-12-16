import React from "react";
import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Text
      fontSize="2xl"
      variant="filled"
      textAlign="center"
      color="brand.secondary"
      maxW="400px"
      alignSelf="center"
      fontFamily="Poppins"
    >
      Pick your language and country/region
    </Text>
  );
};

export default Header;
