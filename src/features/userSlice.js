import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCall } from "../util/apicall";

export const Login = createAsyncThunk('getBanner/products', async(ThunkApi)=>{
    // let url = "https://dummyjson.com/products"
    // let data = await ApiCall(url)
    return true
})

// export const AddBanner = createAsyncThunk('addBanner/products',async(data,ThunkApi)=>{
//   try {
//     console.log('in Thunk ->',data)
//     return 
//   } catch (error) {
    
//   }
// })

// export const updateBanner = createAsyncThunk('updateBanner/products',async(data,ThunkApi)=>{
//   try {
//     // console.log('in Thunk ->',data)
//     return 
//   } catch (error) {
    
//   }
// })

// export const DeleteBanner = createAsyncThunk('deleteBanner/products',async(data,ThunkApi)=>{
//   try {
//     // console.log('in Thunk ->',data)
//     return 
//   } catch (error) {
    
//   }
// })

export const userSlice = createSlice({
    name : 'products',
    initialState:{
    user: [],
    isLoading:false,
    isSuccess:false,
    },
    extraReducers:(builder)=>{
         builder.addCase(Login.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(Login.fulfilled, (state , action)=>{
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(Login.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
    }
})

export default userSlice.reducer