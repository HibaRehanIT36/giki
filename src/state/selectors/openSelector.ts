import { DefaultValue, selector } from "recoil";
import { modelApperanceAtom } from "../atoms/modelApperanceAtom";
import { modelApperanceAtomType } from "../../types";

export const openSelector = selector({
  key: "openSelector",
  get: ({ get }) => {
    const modelApperance = get(modelApperanceAtom);
    return modelApperance.modalOpen;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(modelApperanceAtom, (prevModelApperance: modelApperanceAtomType) => ({
      ...prevModelApperance,
      modalOpen: newValue,
    }));
  },
});
