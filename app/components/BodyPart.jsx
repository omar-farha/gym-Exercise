"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const isSelected = bodyPart === item;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: isSelected ? "4px solid #FF2625" : "none",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "250px",
        cursor: "pointer",
        gap: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Image src={Icon} alt="icon" width={40} height={40} />
      <Typography
        fontSize="20px"
        display="block"
        fontWeight="bold"
        color="#3A1212"
        maxWidth="150px"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
