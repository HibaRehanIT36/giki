import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentContentSelector,
  languageRegionSelector,
} from "../../../state/selectors";
import GenericButton from "../../../components/GenericButton";
import ThreeDots from "../ThreeDots";

const Footer = () => {
  const setCurrentContentState = useSetRecoilState(currentContentSelector);
  const userInfoValues = useRecoilValue(languageRegionSelector);
  const handleMove = () => {
    if (userInfoValues.language && userInfoValues.region)
      setCurrentContentState("Interests");
  };
  const disabled = !userInfoValues.language || !userInfoValues.region;
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap={3}
    >
      <GenericButton
        buttonProps={{
          maxW: "225px",
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
      <GenericButton
        buttonProps={{
          maxW: "225px",
          bg: "transparent",
          color: "brand.darkText",
          textTransform: "capitalize",
          mt: -3,
          _hover: { bgColor: "transparent" },
          onClick: () => setCurrentContentState("Welcome"),
        }}
      >
        <Text fontSize="xx-small">
          back
        </Text>
      </GenericButton>
      <ThreeDots currentStep={2} />
    </Box>
  );
};

export default Footer;
