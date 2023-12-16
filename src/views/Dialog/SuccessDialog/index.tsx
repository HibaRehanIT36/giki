import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { successImageSrc } from "../../../providers";
import GenericButton from "../../../components/GenericButton";
import { useResetRecoilState } from "recoil";
import { modelApperanceAtom, userInformationAtom } from "../../../state/atoms";

const SuccessDialog = () => {
  const resetUserInformationAtom = useResetRecoilState(userInformationAtom);
  const resetModelApperanceAtom = useResetRecoilState(modelApperanceAtom);
  const handleClose = () => {
    resetModelApperanceAtom();
    resetUserInformationAtom();
  };

  return (
    <Box display="flex" flexDirection="column" gap={1} p={15} pb={1}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Image
          objectFit="cover"
          src={successImageSrc}
          maxW={235}
          alt="success"
          className="animate-moveUpDown"
        />
        <Text
          maxW="270px"
          fontSize="ml"
          color="brand.darkText"
          fontWeight={500}
          textAlign="center"
          mt={3}
          className="text-shadow-xs shadow-indigo-500/50"
        >
          All steps have been completed successfully
        </Text>
      </Box>
      <Box mt={20} display="flex" justifyContent="center">
        <GenericButton
          buttonProps={{
            maxW: "225px",
            className: "shadow-md shadow-gray-300",
            onClick: handleClose,
          }}
        >
          <Text fontSize="xs" fontFamily="Montserrat">
            close
          </Text>
        </GenericButton>
      </Box>
    </Box>
  );
};

export default SuccessDialog;
