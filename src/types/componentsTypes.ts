import {
  InputProps,
  ButtonProps,
  SelectProps,
  PopoverProps,
} from "@chakra-ui/react";

//GenericInput
export type GenericInputPropsType = {
  inputProps?: InputProps;
  isError?: boolean;
  errorMessage?: string;
  children?: JSX.Element;
};

//GenericButton
export type GenericIButtontPropsType = {
  buttonProps?: ButtonProps;
  children: JSX.Element | string;
};

//GenericSelect
export type GenericSelectPropsType = {
  selectProps?: SelectProps;
  options: {
    label: string;
    value: string | number;
  }[];
};

//GenericPopover
export type GenericPopoverPropsType = {
  popoverProps?: PopoverProps;
  children: JSX.Element[];
};
