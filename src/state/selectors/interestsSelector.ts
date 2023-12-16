import { DefaultValue, selector } from "recoil";
import { userInformationAtom } from "../atoms";
import { userInformationAtomType } from "../../types";

export const interestsSelector = selector({
  key: "interestsSelector",
  get: ({ get }) => {
    const userInformation = get(userInformationAtom);
    return userInformation.interests;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(
      userInformationAtom,
      (prevUserInformation: userInformationAtomType) => ({
        ...prevUserInformation,
        interests: newValue,
      })
    );
  },
});
