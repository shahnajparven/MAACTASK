import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { regUser } from "../../store/authSlice";
import { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";

const schema = yup.object({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
  passwordConfirm: yup.string(),
  employeeId: yup.string(),
  phoneNumber: yup.string(),
  role: yup.string(),
});

const Register = () => {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(regUser(data));
  };
  return (
    <div>
      {" "}
      <FormProvider {...form}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box
            py={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/*****************************registration ************************ */}

            <Box>
              <Typography py={4} fontSize={20} fontWeight={600}>
                Register Your Account
              </Typography>
              <Box py={1}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Enter Your Name"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box py={1}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Enter Your Email Account"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box py={2}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Password"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box py={2}>
                <Controller
                  name="passwordConfirm"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Confirm confirmPassword"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box py={1}>
                <Controller
                  name="employeeId"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Enter Your employeeId"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box py={1}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <TextField
                        error
                        id="standard-error-helper-text"
                        //   label="Error"
                        placeholder="Enter Your phoneNumber"
                        //   helperText="Incorrect entry."
                        variant="standard"
                        {...field}
                      />
                    </Box>
                  )}
                />
              </Box>
              <Box mt={1}>
                <Controller
                  name='role'
                  control={control}
                  render={({ field }) => (
                    <Box minWidth={150}>
                      <FormControl size="small">
                        <InputLabel
                          id="thrOfficeName-label"
                          sx={{
                            fontSize: "12px",
                            mt: "2px",
                          }}
                        >
                          Room Type
                        </InputLabel>
                        <Select
                          sx={{
                            "& .MuiSelect-select": {
                              width: "13ch",
                              height: "2ch",
                              fontSize: 13,
                            },
                          }}
                          inputProps={{
                            style: { fontSize: 13 },
                          }}
                          size="small"
                          labelId="thrOfficeName-label"
                          id="thrOfficeName"
                          name="thrOfficeName"
                          label="thrOfficeName"
                          
                          {...field}
                        >
                          <MenuItem
                            value="HUB"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            HUB
                          </MenuItem>
                          <MenuItem
                            value="ADMIN"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            ADMIN
                          </MenuItem>
                          <MenuItem
                            value="USER"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            USER
                          </MenuItem>
                        </Select>
                      
                      </FormControl>
                    </Box>
                  )}
                />
              </Box>
              <Box my={2} display="flex" gap={1.5}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: "white",
                    background: "#2D2727",
                    "&:hover": {
                      backgroundColor: "#0062cc",
                      borderColor: "#0062cc",
                      boxShadow: "none",
                    },
                    "&:focus": {
                      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
                    },
                  }}
                >
                  Register
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#2D2727",
                    borderColor: "#2D2727",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#0062cc",
                      borderColor: "#0062cc",
                      boxShadow: "none",
                    },
                    "&:focus": {
                      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
                    },
                  }}
                >
                  Cancle
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </div>
  );
};

export default Register;
