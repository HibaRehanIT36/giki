import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { TbPointFilled } from "react-icons/tb";
const ThreeDots = (props: { currentStep: number }) => {
  const { currentStep } = props;
  return (
    <Box>
      <Flex gap={1}>
        {Array.from(Array(3)).map((known, index) => (
          <Icon
            fontSize={"10px"}
            color={
              currentStep >= index + 1 ? "brand.primary" : "brand.secondary"
            }
            as={TbPointFilled}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ThreeDots;
