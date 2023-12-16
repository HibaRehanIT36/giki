import React from "react";
import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { IsSelectedInterest, getInterestesData } from "../../../utils";
import { checkImageSrc } from "../../../providers";
import { useRecoilState } from "recoil";
import { interestsSelector } from "../../../state/selectors";

const Body = () => {
  const interestes = getInterestesData();
  const [userInterestes, setUserIntersts] = useRecoilState(interestsSelector);

  return (
    <Wrap mt={2} mb={9}>
      {interestes.map((item) => (
        <WrapItem
          key={item.id}
          onClick={() =>
            setUserIntersts((prevInterests) => [
              ...(prevInterests || []),
              item.id,
            ])
          }
        >
          <Box
            borderColor={
              IsSelectedInterest(userInterestes, item.id)
                ? "brand.primary"
                : "transparent"
            }
            position="relative"
            borderBottomStyle="solid"
            width="fit-content"
            borderWidth="1px"
            borderRadius={10}
            maxW={120}
          >
            <Image
              src={item.imageSrc}
              alt="innovation"
              objectFit="cover"
              borderRadius={10}
              padding={"0.05rem"}
            />
            {IsSelectedInterest(userInterestes, item.id) && (
              <Image
                src={checkImageSrc}
                alt="check"
                position="absolute"
                zIndex={3}
                borderRadius="50%"
                p="1px"
                bg="brand.secondary"
                width="10px"
                height="10px"
                top={"11px"}
                right={"7px"}
              />
            )}
            <Text
              fontSize="xs"
              color="brand.light"
              textTransform="capitalize"
              position="absolute"
              zIndex={3}
              bottom={"5px"}
              left={"10px"}
            >
              {item.title}
            </Text>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Body;
