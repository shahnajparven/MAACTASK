import menu from "../assets/menus.png";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box position={'relative'}>
      <Box pt={2}>
        <img height={"100%"} width={"100%"} overflow="hidden" src={menu} />
      </Box>
      <Box display={"flex"} justifyContent={"center"} gap={2.5} position={'absolute'} top={'1.2rem'} right={'8rem'}>
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
    </Box>
  );
};

export default Navbar;
