import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

// const selectedCategory = "New";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        style={{
          color: "white",
          background: category.name === selectedCategory && "#FC1503",
        }}
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#FC1503",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
