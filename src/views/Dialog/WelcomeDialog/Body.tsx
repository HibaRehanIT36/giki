import React from "react";
import { Box, Image, InputRightElement, Text } from "@chakra-ui/react";
import { penImageSrc } from "../../../providers";
import GenericInput from "../../../components/GenericInput";
import { useRecoilState } from "recoil";
import { userNameSelector } from "../../../state/selectors";

const Body = () => {
  const [userNameState, setUserNameState] = useRecoilState(userNameSelector);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={1}
      gap={1}
    >
      <GenericInput
        inputProps={{
          value: userNameState,
          textTransform: "capitalize",
          onChange: (e) => setUserNameState(e.target.value),
        }}
      >
        <InputRightElement>
          <Image src={penImageSrc} alt="pen" width="12px" objectFit="cover" />
        </InputRightElement>
      </GenericInput>
      <Text
        maxW="270px"
        fontSize="xs"
        color="brand.darkText"
        fontWeight={500}
        textAlign="center"
        mt={3}
        className="text-shadow-xs shadow-indigo-500/50"
      >
        Your answers to the next few questions will help us find the right
        communities for you
      </Text>
    </Box>
  );
};

export default Body;
