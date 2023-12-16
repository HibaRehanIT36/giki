import React from "react";
import Dialog from "../Dialog";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { openSelector } from "../../state/selectors";
import { logoImageeSrc } from "../../providers";
import GenericButton from "../../components/GenericButton";

const Home = () => {
  const setModalOpen = useSetRecoilState(openSelector);

  return (
    <Center
      height="100vh"
      bg="brand.secondary"
      display="flex"
      flexDirection="column"
      gap={"90px"}
    >
      <Box display="flex" flexDirection="column" gap={"100px"} p={2}>
        <Image
          src={logoImageeSrc}
          alt="logo"
          objectFit="cover"
          paddingX={"50px"}
        />
        <GenericButton
          buttonProps={{
            className: "shadow-md shadow-gray-800",
            maxH: "50px",
            onClick: () => setModalOpen(true),
          }}
        >
          <Text
            fontSize="xs"
            fontFamily="Montserrat, sans-serif"
            className="text-shadow shadow-indigo-500/50"
          >
            open model
          </Text>
        </GenericButton>
        <Dialog />
      </Box>
    </Center>
  );
};

export default Home;
