import { atom } from "recoil";
import { modelApperanceAtomType } from "../../types";

export const modelApperanceAtom = atom<modelApperanceAtomType>({
  key: "modelApperanceAtom",
  default: {
    modalOpen: false,
    currentModelContent: "Welcome",
  },
});
