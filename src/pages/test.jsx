import {
    Avatar,
    Box,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addUser, fetchUsers } from "../../store/user/usersSlice";
  import Card from "../card/Card";
  
  const UserList = () => {
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
        ({ firstName, lastName, id, image, email, address, company }) => (
          <Card
            key={Math.random()}
            firstName={firstName}
            lastName={lastName}
            id={id}
            image={image}
            email={email}
            address={address?.address}
            city={address?.city}
            state={address?.state}
            company={company?.name}
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
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [image, setImage] = useState("");
  
    // const changeFileHandler = (e) => {
    //   const file = e.target.files;
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = () => {
       
    //     setImage(file);
    //   };
    // };
    const submitHandler=()=>{
      console.log({ firstName, lastName, email ,image})
      dispatch(addUser({ firstName, lastName, email ,image}));
  }
    // const submitHandler = (e) => {
    //   e.preventDefault();
    //   const myForm = new FormData();
  
    //   myForm.append("firstName", firstName);
    //   myForm.append("email", email);
    //   myForm.append("lastName", lastName);
    //   myForm.append("file", image);
    //   console.log({ firstName, lastName, email });
    //   dispatch(addUser(myForm));
    // };
  
    return (
      <Box className="container">
        <h2>Add User</h2>
        
        <div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="enter your name"
          />
          <br />
        </div>
        <div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="enter your name"
          />
          <br />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="enter your name"
          />
          <br />
        </div>
        <Box display="flex" justifyContent="center" py={2}>
              <Typography>Choose Image: </Typography>
              <input
                accept="image/*"
                type="file"
                placeholder="Choose Image"
                id="profileImg"
                // value={image}
                onChange={changeFileHandler}
              />
            </Box>
        <div style={{ padding: "1rem" }}>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
        <Typography
          variant="h5"
          display="flex"
          justifyContent="center"
          fontSize={35}
          py={4}
        >
          All Users
        </Typography>
        <Divider />
  
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
    );
  };
  
  export default UserList;
  