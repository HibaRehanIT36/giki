import React from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { GenericInputPropsType } from "../types";

const GenericInput = (props: GenericInputPropsType) => {
  const { inputProps, children, isError, errorMessage } = props;
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <FormControl isInvalid={isError}>
        <InputGroup width="full" maxW={"223px"}>
          <Input
            bg="brand.lightGray"
            outline="none"
            border="none"
            defaultValue="Alice"
            textAlign="center"
            color="brand.primary"
            fontFamily="Roboto"
            fontSize="2xl"
            errorBorderColor="transparent"
            _focusVisible={{ borderColor: "transparent", outline: "none" }}
            {...inputProps}
          />
          {children}
        </InputGroup>
        <FormErrorMessage
          mt={"-0.03rem"}
          ml={1}
          color="brand.primary"
          fontSize="x-small"
        >
          {errorMessage ? errorMessage : ""}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default GenericInput;
