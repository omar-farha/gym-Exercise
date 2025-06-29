"use client";

import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        pl: 1,
      }}
    >
      <IconButton onClick={() => scrollPrev()}>
        <Image src={LeftArrowIcon} alt="left-arrow" width={30} height={30} />
      </IconButton>
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        pr: 1,
      }}
    >
      <IconButton onClick={() => scrollNext()}>
        <Image src={RightArrowIcon} alt="right-arrow" width={30} height={30} />
      </IconButton>
    </Box>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, bodyParts }) => {
  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item, index) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{ display: "inline-block", mx: 6, mr: 13, width: "200px" }}
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
