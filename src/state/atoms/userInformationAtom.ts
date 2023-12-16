import { atom } from "recoil";
import { userInformationAtomType } from "../../types";

export const userInformationAtom = atom<userInformationAtomType>({
  key: "userInformationAtom",
  default: {
    language: null,
    region: null,
    interests: [],
    userName: "",
  },
});
