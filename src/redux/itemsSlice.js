import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { getItems, submitFormData } from "../api/form";
export const setFilters = createAction("items/setFilters");
export const updateFilter = createAction("items/updateFilter");
export const resetFilters = createAction("items/resetFilters");



/* --------- Async Thunks ---------- */

// fetch items
export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async ({page=1, limit=10}) => {
    const response = await getItems({ page, limit });
    console.log(response, "res")
    return response;
  }
);

// createAsyncThunk takes a string + a function, and returns a new function that Redux knows how to run later.

// submit form
export const createItem = createAsyncThunk("items/createItem", async(formData)=>{
  const response= await submitFormData(formData)
  console.log(response, "response")
  return response;
});


/* --------- Slice ---------- */

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    prices: [],
    rating: null,
    category: ""
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
    hasNextPage: true,
    hasPrevPage: false,
  }
}

  console.log(initialState, "yuo")
  
const itemsSlice = createSlice({
  name: "items",
 initialState,
  reducers: {
    // ✅ Store pagination in Redux
    setPagination(state, action) {
      state.pagination.currentPage = action.payload.page;
      state.pagination.itemsPerPage = action.payload.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        console.log(action.payload.pagination, "paginatio")
                state.pagination = {...state.pagination, ...action.payload.pagination

                };
              
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // create
      .addCase(createItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Filter
      .addCase(setFilters, (state, action)=>{
        state.filters= action.payload;
      })

      .addCase(updateFilter, (state, action)=>{
        const {key, value} = action.payload;
        state.filters[key] = value;
      })

      .addCase(resetFilters, (state)=>{
        state.filters = initialState.filters;
      })

     

  },
});

export const {setPagination} = itemsSlice.actions;

export default itemsSlice.reducer;
