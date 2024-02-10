import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Banner () {
  return (
    <>
      <Box height={"auto"} className="banner">
        <Box
          py={17}
          px={3}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            variant="h3"
            fontWeight={"bold"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={2}
            py={10}
            px={3}
          >
            <Link to="userlist" style={{ textDecoration: "none" }}>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    height: 60,
                    width: 200,
                  }}
                >
                  User List
                </Button>
              </Box>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    height: 60,
                    width: 200,
                    borderTop: 1,
                    borderRight: 3,
                    borderBottom: 3,
                    borderLeft: 1,
                  }}
                >
                  Add User
                </Button>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Banner;
