import { Box } from "@mui/material";
import About from "./About";
import Banner from "./Banner";
import Login from "./user/login";
import Register from "./user/Register";

const Home = () => {
  return (
    <div>
      <Banner />
      <Login/>
      <Box>
        <Register/>
      </Box>
      <Box>
        <About/>
      </Box>
    </div>
  );
};

export default Home;
