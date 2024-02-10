// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { Avatar, Box, Button, Divider, Typography } from "@mui/material";

// const Navbar = () => {
//   return (
//     <>
//       <Box
//         className="container"
//         display={"flex"}
//         justifyContent={"space-between"}
//       >
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <Box py={3}  display={{ lg: "flex", md: "block", sm: "block", xs: "none" }}>
//             <Typography variant="h5" fontWeight={"bold"}>
//               Technext
//             </Typography>
//           </Box>
//         </Link>
//         <Box display={"flex"} gap={2.5} py={3}>
//           <Link to="userlist" style={{ textDecoration: "none" }}>
//             <Box>
//               <Typography variant="h5" fontSize={18} sx={{ cursor: "pointer" }}>
//                 User List
//               </Typography>
//             </Box>
//           </Link>
//           <Box>
//             <Typography variant="h5" fontSize={18} sx={{ cursor: "pointer" }}>
//               Add User
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           justifyContent={"center"}
//           alignItems={"center"}
//           gap={2.5}
//           p={3}
//           display={{ lg: "flex", md: "block", sm: "block", xs: "none" }}
//         >
//           <Box>
//             <Button
//               variant="contained"
//               sx={{
//                 textTransform: "none",
//               }}
//             >
//               Login
//             </Button>
//           </Box>
//           <Box>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderTop: 1,
//                 borderRight: 3,
//                 borderBottom: 3,
//                 borderLeft: 1,
//                 textTransform: "none",
//               }}
//             >
//               Registration
//             </Button>
//           </Box>
//         </Box>
//         <Box display={{ lg: "none", md: "none", sm: "none", xs: "block" }} py={3}>
//           <Avatar height={10} width={10} />
//         </Box>
//       </Box>
//       <Divider color={"#C2D2EB"} />
//     </>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import Banner from "../pages/Banner";

const drawerWidth = 240;
const navItems = [
  <Box>
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
      }}
    >
      Login
    </Button>
  </Box>,
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
  </Box>,
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h6" sx={{ my: 2 }} fontWeight={'bold'}>
          Technext
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="appbar">
        <Toolbar className="tolbar">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            fontWeight={'bold'}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }} >
              Technext
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {/* <Toolbar /> */}
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
