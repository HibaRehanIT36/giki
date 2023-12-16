import React from "react";
import { Box } from "@chakra-ui/react";
import GenericSelect from "../../../components/GenericSelect";
import { getLanguages, getRegsions } from "../../../utils";
import { useSetRecoilState } from "recoil";
import { userInformationAtom } from "../../../state/atoms";

const Body = () => {
  const regsionOptions = getRegsions();
  const languagesOptions = getLanguages();
  const setUserInformation = useSetRecoilState(userInformationAtom);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      marginBottom="130px"
      marginTop={"50px"}
    >
      <GenericSelect
        options={languagesOptions}
        selectProps={{
          onChange: (e) => {
            setUserInformation((prevUserInformation) => ({
              ...prevUserInformation,
              language: e.target.value,
            }));
          },
        }}
      />
      <GenericSelect
        options={regsionOptions}
        selectProps={{
          onChange: (e) => {
            setUserInformation((prevUserInformation) => ({
              ...prevUserInformation,
              region: e.target.value,
            }));
          },
        }}
      />
    </Box>
  );
};

export default Body;
