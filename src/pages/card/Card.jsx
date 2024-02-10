import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Card ({ id,lastName,firstName,image,email,address,city,state,company}) {
  return (
    <Box>
      <Link
        className="productCard"
        to={`/userlist/${id}`}
        style={{ textDecoration: "none" }}
      >
        <Box p={2} border={1} height={285} width={250}>
          <Box display="flex" justifyContent="center" p={2}>
            <Avatar src={image} />
          </Box>
          <Box py={2} lineHeight={1}>
            <Typography variant="span" display="flex" justifyContent="center">
              {" "}
              {firstName} {lastName}
            </Typography>
            <br />
            <Typography variant="span" display="flex" justifyContent="center">
              {email}
            </Typography>
            <br />
            <Typography variant="span" display="flex" justifyContent="center">
              {address}
            </Typography>
            <br />
            <Typography variant="span" display="flex" justifyContent="center">
              {city}
            </Typography>
            <Typography variant="span" display="flex" justifyContent="center">
              {state}
            </Typography>
            <br />
            <Typography variant="span" display="flex" justifyContent="center">
              {company}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default Card;
