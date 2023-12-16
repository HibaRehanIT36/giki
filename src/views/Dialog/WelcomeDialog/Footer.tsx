import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentContentSelector,
  userNameSelector,
} from "../../../state/selectors";
import GenericButton from "../../../components/GenericButton";
import ThreeDots from "../ThreeDots";

const Footer = () => {
  const setCurrentContentState = useSetRecoilState(currentContentSelector);
  const userNameValue = useRecoilValue(userNameSelector);
  const handleMove = () => {
    if (userNameValue) setCurrentContentState("LanguageRegion");
  };
  const disabled = !userNameValue;
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap={20}
      mt={4}
    >
      <GenericButton
        buttonProps={{
          maxW: "225px",
          alignItems: "center",
          bg: disabled ? "brand.gray" : "brand.primary",
          _hover: { bgColor: disabled ? "brand.gray" : "brand.primary" },
          className: "shadow-md shadow-gray-300",
          onClick: handleMove,
        }}
      >
        <Text fontSize="xs" fontFamily="Montserrat">
          next
        </Text>
      </GenericButton>
      <ThreeDots currentStep={1} />
    </Box>
  );
};

export default Footer;
