import React from "react";
import { Stack } from "@mui/material";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <div className="custom-spinner"></div>
  </Stack>
);

export default Loader;
