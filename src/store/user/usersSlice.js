import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const userCreate = createAsyncThunk(
  "user/userCreate",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post("https://dummyjson.com/users/add", user);
      console.log(data, "backend");
      return fulfillWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      return fulfillWithValue(data.users || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
      return fulfillWithValue(data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  users: [],
  userDetails: {},
  error: null,
  isDeleted: false,
  message: "",
  success: false,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(userCreate.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(userCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
      state.error = null;
    });
    builder.addCase(userCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.payload;
    });

    // fetch data
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.payload;
    });

    // fetch user details
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      console.log(action.payload, "reducers");
      state.isLoading = false;
      state.userDetails = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.userDetails = [];
      state.error = action.payload;
    });
  },
  reducers: {
    // add data
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
