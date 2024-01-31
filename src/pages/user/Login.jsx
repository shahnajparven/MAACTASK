// /* eslint-disable react-hooks/rules-of-hooks */
// // import * as yup from "yup";
// // import { yupResolver } from "@hookform/resolvers/yup";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// // import { useForm, Controller, FormProvider } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
// import { loginUser } from "../../store/authSlice";
// import Cookies from 'js-cookie';
// import { toast } from "react-toastify";

// const Login = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   // const { isLoading, isLoggedIn, user, token } = useSelector(
//   //   (state) => state.auth
//   // );

//   const { isLoading, error, message, isLoggedIn,status,token } = useSelector(
//     (state) => state.auth
//   );
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: "clearError" });
//     }

//     if (status) {
//       toast.success('success');
//       dispatch({ type: "clearMessage" });
//     }
//   }, [dispatch, error, message, isLoggedIn,status]);

//   const tokens = token;
//   Cookies.set('token', tokens, { expires: 7, secure: true });


//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log({employeeId, password});
//     dispatch(loginUser({ employeeId, password }));
//   };

//   // const form = useForm({
//   //   resolver: yupResolver(schema),
//   // });

//   // const { handleSubmit, control } = form;

//   // const onSubmit = (data) => {
//   //   console.log(data);
//   //   dispatch(loginUser(data));
//   // };

//   return (
//     <Box>
//       {/* {isLoading ? (
//         <p>Loading...</p>
//       ) : ( */}
//       <form onSubmit={submitHandler}>
//         <Box py={2}>
//           <Box display="flex" justifyContent="center" py={2}>
//             <Typography variant="span" lineHeight={2.5} pr={4.6}>
//               Email:{" "}
//             </Typography>
//             <input
//               className="inputarea"
//               type="text"
//               placeholder="Enter Your employeeId"
//               id="employeeId"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//             />
//           </Box>
//           <Box display="flex" justifyContent="center" py={2}>
//             <Typography variant="span" lineHeight={2.5} pr={2}>
//               Password:{" "}
//             </Typography>
//             <input
//               className="inputarea"
//               type="password"
//               placeholder="Enter Your Password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Box>
//           <Box display="flex" justifyContent="center" gap={2}>
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{
//                 background: "#FD8D14",
//                 color: "black",
//                 textTransform: "none",
//                 boxShadow: "none",
//                 "&:hover": {
//                   backgroundColor: "#F6F4EB",
//                   borderColor: "none",
//                   boxShadow: "none",
//                   color: "#FD8D14",
//                 },
//                 "&:focus": {
//                   boxShadow: "#F6F4EB",
//                 },
//               }}
//             >
//               Login
//             </Button>
//           </Box>
//         </Box>
//       </form>
//       {/* )} */}
//     </Box>
//   );
// };

// export default Login;



import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const schema = yup.object({
  employeeId: yup.string(),
  password: yup.string(),
});

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error, message,token } = useSelector(
    (state) => state.auth
  );
  const tokens = token;
  Cookies.set('token', tokens, { expires: 7, secure: true });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success("successfull");
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, isLoggedIn, error, message,token]);

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <FormProvider {...form}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box
              py={2}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {/*****************************Login ************************ */}

              <Box>
                <Typography py={4} fontSize={20} fontWeight={600}>
                  Sign In Your Account
                </Typography>

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
                          placeholder="Enter Your Id"
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
                    Login
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
                    Create an Account
                  </Button>
                </Box>
              </Box>

              {/*****************************registration ************************ */}
            </Box>
          </Box>
        </FormProvider>
      )}
    </Box>
  );
};

export default Login;
