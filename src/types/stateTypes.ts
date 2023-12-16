export type modelApperanceAtomType = {
  modalOpen: boolean;
  currentModelContent: currentModelContentType;
};

export type currentModelContentType =
  | "Welcome"
  | "LanguageRegion"
  | "Interests"
  | "Success";

export type userInformationAtomType = {
  language: string | null;
  region: string | null;
  interests: number[];
  userName: string;
};
