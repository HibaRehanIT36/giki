import React from "react";
import { Select } from "@chakra-ui/react";
import { GenericSelectPropsType } from "../types";

const GenericSelect = (props: GenericSelectPropsType) => {
  const { options, selectProps } = props;
  return (
    <Select
      bg="brand.lightGray"
      outline="none"
      border="none"
      color="brand.gray"
      alignItems="center"
      maxW="330px"
      maxH="40px"
      fontSize="small"
      _focusVisible={{ borderColor: "transparent", outline: "none" }}
      {...selectProps}
    >
      {options.map((option, index) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Select>
  );
};

export default GenericSelect;
