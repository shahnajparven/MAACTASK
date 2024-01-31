/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";


const Profile = () => {
  const { user,isLoading } = useSelector((state) => state.auth);
  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
    <Box sx={{ width: "100%", height: "90vh" }}>
      <Typography>Profile</Typography>
     
        <Box>
          <Box> Name: {user.name} </Box>
          <Box> Role: {user.role}</Box>
          <Box> Email: {user.email}</Box>
        </Box>
     
    </Box>
    )}
    </>
  );
};

export default Profile;
