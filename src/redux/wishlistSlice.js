import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToWishlist, getWishlistItems } from "../api/form";

// export const wishlistItems = createAsyncThunk(
//     "wishlist/wishlistItems",
//     async(wishlistData)=>{
//         const response = await addToWishlist(wishlistData);
//         return response;
//     }
// );


// Add Wishlist
export const wishlistItems = createAsyncThunk(
  "wishlist/wishlistItems",
  async (wishlistData, thunkAPI) => {
    try {
      const response = await addToWishlist(wishlistData);
      return response.data;
    } catch (error) {
      console.error("Backend says:", error.response?.data);
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

// Fetch Wishlist
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, thunkAPI) => {
    try {
      const res = await getWishlistItems();
      console.log(res,'res in thunk')
      return res.wishlist;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);



//Slice

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState: {
        wishlist: [],
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder)=>{
        builder

        
        .addCase(wishlistItems.pending, (state)=>{
            state.loading = true;
        })

        .addCase(wishlistItems.fulfilled, (state, action)=>{
            state.loading = false;
            state.wishlist = action.payload;
        })

        .addCase(wishlistItems.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        // fetch
        .addCase(fetchWishlist.pending, (state)=>{
          state.loading = true;
        })

        .addCase(fetchWishlist.fulfilled, (state, action)=>{
          state.loading = false;
          state.wishlist = action.payload;
        })

        .addCase(fetchWishlist.rejected, (state, action)=>{
          state.loading= false;
        state.error = action.payload || "Failed to load wishlist";
        })

    }

})

export default wishlistSlice.reducer;

/*    wishlistItems is an ASYNC REDUX ACTION (called a thunk) that:

talks to the backend
updates Redux state automatically
createAsyncThunk

This function creates three actions automatically for you.

For wishlistItems, Redux creates:
Redux Toolkit combines:
slice name + action name

wishlist/wishlistItems/pending
wishlist/wishlistItems/fulfilled
wishlist/wishlistItems/rejected


wishlistData = { itemId: "64f1a9c8e1..." }

wishlistData === payload

async (payload, thunkAPI) => { ... }

🔹 Parameter 1 → payload
async (payload) => { ... }
This is whatever you pass while dispatching:

dispatch(wishlistItems({ itemId }))
So:

payload = { itemId: "123abc" }
🔹 Parameter 2 → thunkAPI (NOT error)
It is an object given by Redux Toolkit

🔁 Real-world Examples
Case 1️⃣: Duplicate item (409)
error.response?.data
→ { message: "Item already exists" }

Case 2️⃣: Validation error (400)
error.response?.data
→ { message: "itemId is required" }

Case 3️⃣: No internet / server down
error.response?.data
→ undefined

5️⃣ Why we use this with rejectWithValue
return rejectWithValue(error.response?.data);


Because:
Backend errors = business logic
UI needs backend message
App must not crash

Slice = one feature box 📦
Inside the box:
initial data
logic to change data
loading state
error state


*/