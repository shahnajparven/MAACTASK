import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../store/user/usersSlice";
import { Avatar, Box, Divider, Typography } from "@mui/material";

function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  console.log(userDetails);
  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Box className="container" py={5}>
        <Typography variant="h4" display="flex" justifyContent="center" py={2}> User details</Typography>
        <Divider/>
        <Box flexDirection={"column"} py={5}>
          <Box display="flex" justifyContent="center">
            {" "}
            <Avatar src={userDetails.image} />
          </Box>

          <Typography variant="h5" display="flex" justifyContent="center" lineHeight={3}>
            {userDetails.firstName} {userDetails.lastName}
          </Typography>

         
          <Typography variant="span" display="flex" justifyContent="center"  lineHeight={2} color={'#1565c0'}>
            {userDetails.email}
          </Typography>
        
          <Typography variant="span" display="flex" justifyContent="center"  lineHeight={3}>
            {userDetails.address?.adddress}
          </Typography>
        
          <Typography variant="span" display="flex" justifyContent="center">
            {userDetails.address?.city}
          </Typography>
          <Typography variant="span" display="flex" justifyContent="center">
            {userDetails.address?.state}
          </Typography>
       
          <Typography variant="span" display="flex" justifyContent="center">
            {userDetails.company?.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserDetails;
