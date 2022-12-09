import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postNewOrder from '../../../api/postNewOrder';
// import axios from 'axios';

const initialState = {
  currentStep: 0,
  isModalOpen: false,
  orderInfo: {},
};

export const createNewOrder = createAsyncThunk('order/createNewOrder', async (orderData, { rejectWithValue }) => {
  try {
    const orderInfo = await postNewOrder(orderData);
    return orderInfo;
  } catch (e) {
    return rejectWithValue(e);
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    increaseStep: (state) => {
      state.currentStep += 1;
    },
    decreaseStep: (state) => {
      if (state.currentStep === 0) {
        state.currentStep = 0;
      } else {
        state.currentStep -= 1;
      }
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createNewOrder.fulfilled, (state, action) => {
      state.orderInfo = action.payload.order;
      state.isLoading = false;
    });
    builder.addCase(createNewOrder.rejected, (state, action) => {
      state.orderInfo = action.payload;
      state.isLoading = false;
    });
  },
});

export const { increaseStep, decreaseStep, setIsModalOpen } = orderSlice.actions;

export default orderSlice.reducer;
