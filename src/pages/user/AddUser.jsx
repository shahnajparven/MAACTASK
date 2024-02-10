import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, userCreate } from "../../store/user/usersSlice";
import { Controller, FormProvider, useForm } from "react-hook-form";

const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
});

function AddUser() {
  // const [firstName,setFirstName]=useState('');
  // const [lastName,setLastName]=useState('');
  // const [email,setEmail]=useState('');

  const dispatch = useDispatch();

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };
  return (
    <Box className="container" mt={5}>
      <Typography display="flex" justifyContent="center" variant="h4" py={3}>
        Add user
      </Typography>
      <FormProvider {...form}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Box display="flex" justifyContent="center" py={2}>
              <Typography variant="span" lineHeight={2.5} pr={4.6}>
                First Name:{" "}
              </Typography>

              <Box py={1}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        id="standard-error-helper-text"
                        placeholder="Enter Your firstName"
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" py={2}>
              <Typography variant="span" lineHeight={2.5} pr={4.6}>
                Last Name:{" "}
              </Typography>
              <Box py={1}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        id="standard-error-helper-text"
                        placeholder="Enter Your lastName"
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" py={2}>
              <Typography variant="span" lineHeight={2.5} pr={3}>
                Email:{" "}
              </Typography>
              <Box py={1}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        // color="#c2d2eb"
                        id="standard-error-helper-text"
                        placeholder="Enter Your email"
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
            </Box>
            {/* <Box display="flex" justifyContent="center" py={2}>
              <Typography variant="span" lineHeight={2.5} pr={3}>
                Email:{" "}
              </Typography>
              <Box py={1}>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        // color="#c2d2eb"
                        id="standard-error-helper-text"
                        placeholder="Enter Your email"
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
            </Box> */}

            <Box display="flex" justifyContent="center" gap={2}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  background: "#c2d2eb",
                  color: "black",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#c2d2eb",
                    borderColor: "none",
                    boxShadow: "none",
                    color: "black",
                  },
                  "&:focus": {
                    boxShadow: "#F6F4EB",
                  },
                }}
              >
                Add User
              </Button>
              <Link to="/">
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{
                    borderColor: "#c2d2eb",
                    color: "black",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#F6F4EB",
                      borderColor: "#c2d2eb",
                      boxShadow: "none",
                      color: "black",
                    },
                    "&:focus": {
                      boxShadow: "#F6F4EB",
                    },
                  }}
                >
                  Cancle
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </Box>
  )
}

export default AddUser;
