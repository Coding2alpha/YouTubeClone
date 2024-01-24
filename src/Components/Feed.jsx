import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromApi";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("new");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=&${selectedCategory}`);
  }, [selectedCategory]);

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
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography>Copyright 2024 </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
