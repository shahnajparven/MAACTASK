import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const regUser = createAsyncThunk(
  "auth/regUser",
  async (auth, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post("https://staging-api.erpxbd.com/api/v1/users/signup", auth);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (auth, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post("https://staging-api.erpxbd.com/api/v1/users/login", auth);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get("user/me");
      return data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get("user/logout");
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  user: [],
  error: null,
  message: "",
  status: '',
  isLoggedIn: false,
  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(regUser.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(regUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null;
    });
    builder.addCase(regUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.payload;
    });

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
    // load user
    builder.addCase(loadUser.pending, (state) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
      state.user = [];
    });

    // logout user
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.message = action.payload;
      state.error = null;
      state.user = [];
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
export const { reset, clearError } = authSlice.actions;
export default authSlice.reducer;
