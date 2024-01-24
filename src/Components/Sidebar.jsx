import { Stack, Box, colors } from "@mui/material";
import { categories } from "../utils/constants";

const selected = "New";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <Box key={category.name}>
          <button
            className="category-btn"
            style={{
              background: category.name === selected && "#FC1503",
              color: "white",
            }}
          >
            <span
              style={{ color: category.name === selected ? "white" : "red" }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        </Box>
      ))}
    </Stack>
  );
};
export default Sidebar;
