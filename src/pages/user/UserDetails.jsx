import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  fetchUserDetails } from "../../store/user/usersSlice";
import { Avatar, Box, Typography } from "@mui/material";

function UserDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  console.log(userDetails);
  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Box>
       <Typography variant="h5"> User details</Typography>
       <Avatar src={userDetails.image}/>
       <Typography>{userDetails.firstName} {" "}{userDetails.lastName}</Typography> 
      </Box>
    </Box>
  )
}

export default UserDetails;
