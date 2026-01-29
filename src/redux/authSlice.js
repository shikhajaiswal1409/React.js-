// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { loginFormData, signupFormData } from "../api/form";

// // Login API

// export const loginUser = createAsyncThunk(
//     "auth/login",
//     async(data, thunkAPI)=>{
//         try{
//             const response = await loginFormData(data);
//             return response;
//         }catch(err){
//             return thunkAPI.rejectWithValue("Login failed");
//         }
//     }
// );

// // Signup API

// export const signupUser = createAsyncThunk(
//     "auth/signup",
//     async(data, thunkAPI)=>{
//         try{
//             const response = await signupFormData(data);
//             return response;

//         }catch(err){
//             return thunkAPI.rejectWithValue("Signup failed");

//         }
//     }

// );

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginFormData, signupFormData } from "../api/form";

// ======================
// LOGIN THUNK
// ======================
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await loginFormData(data);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Login failed", err);
    }
  }
);

// ======================
// SIGNUP THUNK
// ======================
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {

    try {
      console.log(data,'signupflow')
      const response = await signupFormData(data);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("Signup failed", err);
    }
  }
);

// ======================
// AUTH SLICE
// ======================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log(action.payload,'action.payload')
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("userToken", action.payload.token)
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

// ======================
// EXPORTS
// ======================
export const { logout } = authSlice.actions;
export default authSlice.reducer;






