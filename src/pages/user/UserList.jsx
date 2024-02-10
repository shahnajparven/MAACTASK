import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../../store/user/usersSlice";
import Card from "../card/Card";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  name: yup.string(),
  city: yup.string(),
  state: yup.string(),
  address: yup.string(),
});

function UserList(){
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  console.log(users, "jkhj");

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const [sortedByName, setSortedByName] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = users.filter(
    (product) =>
      product.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(users, query, sortedByName) {
    let filteredProducts = users;

    // sorted Input Items
    if (sortedByName) {
      filteredProducts = sortedByName;
    }

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    return filteredProducts.map(
      ({
        firstName,
        lastName,
        id,
        image,
        email,
        address,
        company,
        name,
        city,
        state,
      }) => (
        <Card
          key={Math.random()}
          firstName={firstName}
          lastName={lastName}
          id={id}
          image={image}
          email={email}
          address={address?.address || address}
          city={address?.city || city}
          state={address?.state || state}
          company={company?.name || name}
        />
      )
    );
  }

  const result = filteredData(users, query, sortedByName);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const sortByName = (e) => {
    setSortedByName(e.target.value);
    console.log(e.target.value, "data");
    const data = [...users];
    if (data.length > 0) {
      if (e.target.value === "firstName") {
        let sortedDataByName = data.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        setSortedByName(sortedDataByName);
      } else if (e.target.value === "email") {
        let sortedDataByEmail = data.sort((a, b) =>
          a.email.localeCompare(b.email)
        );
        setSortedByName(sortedDataByEmail);
      } else if (e.target.value === "company") {
        let sortedDataByCompany = data.sort((a, b) =>
          a.company?.name.localeCompare(b.company?.name)
        );
        setSortedByName(sortedDataByCompany);
      }
    }
  };
  console.log(sortedByName, "sort");

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };

  return (
    <Box className="container">
      <Box className="container" mt={5}>
        <Typography
          display="flex"
          justifyContent="center"
          variant="h4"
          py={1}
          fontSize={25}
          fontWeight={"bold"}
        >
          Add user
        </Typography>
        <FormProvider {...form}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box width={"100%"} display="flex" py={2}>
              <Box display="flex">
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
                              placeholder="Enter Your first Name"
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
                              placeholder="Enter Your last Name"
                              variant="standard"
                              {...field}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
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
                              placeholder="Enter Your Email"
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
                      State:{" "}
                    </Typography>
                    <Box py={1}>
                      <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                          <Box minWidth={150}>
                            <TextField
                              // color="#c2d2eb"
                              id="standard-error-helper-text"
                              placeholder="Enter Your State"
                              variant="standard"
                              {...field}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Box display="flex" justifyContent="center" py={2}>
                    <Typography variant="span" lineHeight={2.5} pr={3}>
                      Address:{" "}
                    </Typography>
                    <Box py={1}>
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <Box minWidth={150}>
                            <TextField
                              // color="#c2d2eb"
                              id="standard-error-helper-text"
                              placeholder="Enter Your Address"
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
                      Company:{" "}
                    </Typography>
                    <Box py={1}>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <Box minWidth={150}>
                            <TextField
                              // color="#c2d2eb"
                              id="standard-error-helper-text"
                              placeholder="Enter Company Name"
                              variant="standard"
                              {...field}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box display="flex">
                <Box>
                  <Box display="flex" justifyContent="center" py={2}>
                    <Typography variant="span" lineHeight={2.5} pr={3}>
                      City:{" "}
                    </Typography>
                    <Box py={1}>
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <Box minWidth={150}>
                            <TextField
                              // color="#c2d2eb"
                              id="standard-error-helper-text"
                              placeholder="Enter your City"
                              variant="standard"
                              {...field}
                            />
                          </Box>
                        )}
                      />
                    </Box>
                  </Box>
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
            </Box>
          </Box>
        </FormProvider>
      </Box>
      <Divider />
      <Typography
        variant="h5"
        display="flex"
        justifyContent="center"
        fontSize={25}
        fontWeight={"bold"}
        py={2}
      >
        All Users
      </Typography>

      <Box py={4} display="flex" justifyContent="space-between">
        <Box width={"100%"} pl={13}>
          <input
            className="searchBar"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search a user..."
          />
        </Box>
        <Box pr={13}>
          <Box minWidth={50}>
            <FormControl fullWidth>
              <InputLabel id="thrOfficeName-label" sx={{ fontSize: "12px" }}>
                Sort By
              </InputLabel>
              <Select
                onChange={sortByName}
                variant="filled"
                sx={{
                  "& .MuiSelect-select": {
                    width: "10ch",
                    fontSize: "13px",
                    px: "20px",
                  },
                }}
                size="small"
                labelId="thrOfficeName-label"
                id="thrOfficeName"
                name="thrOfficeName"
                label="thrOfficeName"
              >
                <MenuItem value="firstName" sx={{ fontSize: "13px" }}>
                  Name
                </MenuItem>
                <MenuItem value="email" sx={{ fontSize: "13px" }}>
                  Email
                </MenuItem>
                <MenuItem value="company" sx={{ fontSize: "13px" }}>
                  Company
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {result}
      </Box>
    </Box>
  )
}

export default UserList;
