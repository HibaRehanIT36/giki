import { currentModelContentType } from "../types";
import InterestsDialog from "../views/Dialog/InterestsDialog";
import LanguageRegionDialog from "../views/Dialog/LanguageRegionDialog";
import SuccessDialog from "../views/Dialog/SuccessDialog";
import WelcomeDialog from "../views/Dialog/WelcomeDialog";

export const getCurrentContent = (
  currentContentState: currentModelContentType
) => {
  const views = {
    Welcome: WelcomeDialog,
    LanguageRegion: LanguageRegionDialog,
    Interests: InterestsDialog,
    Success: SuccessDialog,
  };
  return views[currentContentState];
};

export const getModelSize = (
  currentContentState: currentModelContentType,
  isSmallScreen: boolean
) => {
  const modelSizeBasedOnContent =
    currentContentState === "Interests" ? "xl" : "lg";
  const modelSize = isSmallScreen ? "full" : modelSizeBasedOnContent;
  return modelSize;
};
