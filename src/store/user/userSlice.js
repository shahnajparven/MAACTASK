import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../config/axios";


export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (demo, { rejectWithValue, fulfillWithValue }) => {
      try {
        const { data } = await apiInstance.get('user/all');
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
    isDeleted: false,
    message: "",
    success: false,
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
  
    extraReducers: (builder) => {
  
      // fetch data
      builder.addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      });
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.demo = [];
        state.error = action.payload;
      });
    },
    reducers: {
      reset: () => initialState,
      clearError: (state) => ({
        ...state,
        error: null,
      }),
    },
  });
  export const { reset, clearError } = userSlice.actions;
  export default userSlice.reducer;
  