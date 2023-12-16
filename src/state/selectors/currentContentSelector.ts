import { DefaultValue, selector } from "recoil";
import { modelApperanceAtom } from "../atoms";
import { modelApperanceAtomType } from "../../types";

export const currentContentSelector = selector({
  key: "currentContentSelector",
  get: ({ get }) => {
    const modelApperance = get(modelApperanceAtom);
    return modelApperance.currentModelContent;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(modelApperanceAtom, (prevModelApperance: modelApperanceAtomType) => ({
      ...prevModelApperance,
      currentModelContent: newValue,
    }));
  },
});
