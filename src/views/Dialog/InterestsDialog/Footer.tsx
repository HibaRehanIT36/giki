import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentContentSelector,
  interestsSelector,
} from "../../../state/selectors";
import GenericButton from "../../../components/GenericButton";
import ThreeDots from "../ThreeDots";

const Footer = () => {
  const setCurrentContentState = useSetRecoilState(currentContentSelector);
  const userInterestes = useRecoilValue(interestsSelector);
  const handleSucsses = () => {
    if (userInterestes.length < 3) {
      return;
    }
    setCurrentContentState("Success");
  };
  const disabled = userInterestes.length < 3;
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
          textTransform: "capitalize",
          bg: disabled ? "brand.gray" : "brand.primary",
          _hover: { bgColor: disabled ? "brand.gray" : "brand.primary" },
          onClick: handleSucsses,
        }}
      >
        <Text fontSize="xs" fontFamily="Montserrat">
          {disabled ? "Pick 3 more" : "save"}
        </Text>
      </GenericButton>

      <GenericButton
        buttonProps={{
          bg: "transparent",
          mt: -3,
          maxW: "225px",
          color: "brand.darkText",
          textTransform: "capitalize",
          _hover: { bgColor: "transparent" },
          onClick: () => setCurrentContentState("LanguageRegion"),
        }}
      >
        <Text fontSize="xx-small" letterSpacing={1}>
          back
        </Text>
      </GenericButton>
      <ThreeDots currentStep={3} />
    </Box>
  );
};

export default Footer;
