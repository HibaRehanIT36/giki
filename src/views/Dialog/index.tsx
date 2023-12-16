import React from "react";
import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentContentSelector, openSelector } from "../../state/selectors";
import { getCurrentContent, getModelSize } from "../../utils";
const Dialog = () => {
  const [modalOpenState, setModalOpen] = useRecoilState(openSelector);
  const currentModelContent = useRecoilValue(currentContentSelector);
  const CurrentContent = getCurrentContent(currentModelContent);
  const [isSmallScreen] = useMediaQuery("(max-width: 550px)");
  const modelSize = getModelSize(currentModelContent, isSmallScreen);
  return (
    <Box>
      <Modal
        isOpen={modalOpenState}
        size={modelSize}
        onClose={() => setModalOpen(true)}
      >
        <ModalOverlay />
        <ModalContent p={5}>
          <CurrentContent />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Dialog;
