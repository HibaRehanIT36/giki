import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { letterImageSrc } from "../../../providers";

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
      gap={2}
    >
      <Center bg="brand.secondary" p="4" w={100} h={100} borderRadius={8}>
        <Image src={letterImageSrc} width={10} alt="A" objectFit="cover" />
      </Center>
      <Text
        fontSize="sm"
        color="brand.gray"
        className="text-shadow-sm shadow-indigo-500/50"
      >
        alice@wonderland.space
      </Text>
      <Text
        fontSize="2xl"
        variant="filled"
        fontFamily="Poppins"
        color="brand.secondary"
        mt={4}
      >
        Welcome to Giki
      </Text>
    </Box>
  );
};

export default Header;
