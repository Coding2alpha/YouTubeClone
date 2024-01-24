import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography>Copyright</Typography>
      </Box>
    </Stack>
  );
};
export default Feed;
