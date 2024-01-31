import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (products, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post('demo', products);
      console.log(data,'backend')
      return fulfillWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (products, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get('https://staging-api.erpxbd.com/api/v1/region/20/1');
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);
export const fetchProductsDetails = createAsyncThunk(
  "products/fetchProductsDetails",
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`demo/${id}`);
      return fulfillWithValue(data.data || data.message);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message || "Unknown Error");
    }
  }
);

const initialState = {
  isLoading: false,
  products: [],
  productsDetails:{},
  error: null,
  isDeleted: false,
  message: "",
  success: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    // add data
    builder.addCase(productsCreate.pending, (state) => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(productsCreate.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.message = action.payload;
      state.success = true;
      state.error = null;
    });
    builder.addCase(productsCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.payload;
    });

    // fetch data
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.payload;
    });
    // fetch products details
    builder.addCase(fetchProductsDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsDetails.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.productsDetails = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProductsDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.productsDetails = [];
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
export const { reset, clearError } = productsSlice.actions;
export default productsSlice.reducer;
