import {
  educationImageSrc,
  innovationImageSrc,
  loremIpsumImageSrc,
  medicineImageSrc,
  pharmechImageSrc,
  researchImageSrc,
  technologyImageSrc,
  telemediceneImageSrc,
} from "../providers";

export const getInterestesData = () => {
  return [
    {
      id: 1,
      imageSrc: innovationImageSrc,
      title: "innovation",
    },
    {
      id: 2,
      imageSrc: medicineImageSrc,
      title: "medicine",
    },
    {
      id: 3,
      imageSrc: educationImageSrc,
      title: "education",
    },
    {
      id: 4,
      imageSrc: pharmechImageSrc,
      title: "pharmech",
    },
    {
      id: 5,
      imageSrc: researchImageSrc,
      title: "research",
    },
    {
      id: 6,
      imageSrc: technologyImageSrc,
      title: "technology",
    },
    {
      id: 7,
      imageSrc: telemediceneImageSrc,
      title: "telemedicene",
    },
    {
      id: 8,
      imageSrc: loremIpsumImageSrc,
      title: "lorem Ipsum",
    },
  ];
};

export const IsSelectedInterest = (
  selectedInterestes: number[],
  interestId: number
) => {
  if (!selectedInterestes) return false;
  const isExisted = selectedInterestes.includes(interestId);
  return isExisted ? true : false;
};
