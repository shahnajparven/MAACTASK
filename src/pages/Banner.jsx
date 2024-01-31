import { Box, Button } from "@mui/material";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <Box height={"auto"}>
        <img height={"100%"} width={"100%"} overflow="hidden" src={banner} />
      </Box>
      <Box display={"flex"} justifyContent={"center"} gap={2}>
        <Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              borderTop: 1,
              borderRight: 3,
              borderBottom: 3,
              borderLeft: 1,
              textTransform: "none",
            }}
          >
            Registration
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
