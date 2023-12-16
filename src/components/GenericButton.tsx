import React from "react";
import { GenericIButtontPropsType } from "../types";
import { Button } from "@chakra-ui/react";

const GenericButton = (props: GenericIButtontPropsType) => {
  const { buttonProps, children } = props;
  return (
    <Button
      bg="brand.primary"
      color="brand.light"
      alignSelf="center"
      size="md"
      width="full"
      maxH="37px"
      textTransform="uppercase"
      _hover={{ bgColor: "brand.primary" }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
