import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, SideBar } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "colum", md: "row" } }}>
      <Box
        sx={{
          // height: "85vh",
          height: { sx: "auto", md: "85vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", padding: "7px" }}
        >
          Copyright @ 2022 SPJ
        </Typography>
      </Box>

      <Box p={1.5} sx={{ overflowY: "auto", height: "82.5vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
