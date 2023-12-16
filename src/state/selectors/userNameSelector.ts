import { DefaultValue, selector } from "recoil";
import { userInformationAtom } from "../atoms";
import { userInformationAtomType } from "../../types";

export const userNameSelector = selector({
  key: "userNameSelector",
  get: ({ get }) => {
    const userInformation = get(userInformationAtom);
    return userInformation.userName;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(
      userInformationAtom,
      (prevUserInformation: userInformationAtomType) => ({
        ...prevUserInformation,
        userName: newValue,
      })
    );
  },
});
