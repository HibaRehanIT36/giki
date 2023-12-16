import { userInformationAtom } from "../atoms";
import { userInformationAtomType } from "../../types";
import { selector, DefaultValue } from "recoil";

export const languageRegionSelector = selector({
  key: "languageRegionSelector",
  get: ({ get }) => {
    const userInformation = get(userInformationAtom);
    return {
      language: userInformation.language,
      region: userInformation.region,
    };
  },
  set: ({ set }, newValues) => {
    if (newValues instanceof DefaultValue) {
      return;
    }
    set(
      userInformationAtom,
      (prevUserInformation: userInformationAtomType) => ({
        ...prevUserInformation,
        language: newValues.language ?? prevUserInformation.language,
        region: newValues.region ?? prevUserInformation.region,
      })
    );
  },
});
