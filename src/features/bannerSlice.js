import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCall } from "../util/apicall";

export const GetBanner = createAsyncThunk('getBanner/products', async(ThunkApi)=>{
    let url = "https://dummyjson.com/products"
    let data = await ApiCall(url)
    return data?.products
})

export const AddBanner = createAsyncThunk('addBanner/products',async(data,ThunkApi)=>{
  try {
    console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const updateBanner = createAsyncThunk('updateBanner/products',async(data,ThunkApi)=>{
  try {
    // console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const DeleteBanner = createAsyncThunk('deleteBanner/products',async(data,ThunkApi)=>{
  try {
    // console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const bannerSlice = createSlice({
    name : 'products',
    initialState:{
    banners: [],
    pendingBanner: [],
    publishedBanner:[],
    isLoading:false,
    isSuccess:false,
    },
    extraReducers:(builder)=>{
         builder.addCase(GetBanner.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(GetBanner.fulfilled, (state , action)=>{
            state.banners = action.payload;  
            let pendingData = action.payload.filter((item) => {
                if ((item.id) % 6 == 1) {
                    return item
                }
            })
            let published = action.payload.filter((item) => {
                if ((item.id) % 4 == 0) {
                    return item
                }
            })

            state.pendingBanner = pendingData;
            state.publishedBanner = published;
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(GetBanner.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
         builder.addCase(DeleteBanner.pending, (state,action)=>{
          // console.log('in extra pending')
          state.isLoading=true;
         })
         builder.addCase(DeleteBanner.fulfilled, (state,action)=>{
          state.isLoading=false;
         })
         builder.addCase(DeleteBanner.rejected,(state,action)=>{
          state.isLoading=false;
         })

         builder.addCase(AddBanner.pending, (state,action)=>{
          // console.log('in extra add pending')
          state.isLoading=true;
         })
         builder.addCase(AddBanner.fulfilled, (state,action)=>{
          console.log('in extra add full')
          state.isLoading=false;
         })
         builder.addCase(AddBanner.rejected,(state,action)=>{
          state.isLoading=false;
         })

         builder.addCase(updateBanner.pending, (state,action)=>{
          // console.log('in extra update pending')
          state.isLoading=true;
         })
         builder.addCase(updateBanner.fulfilled, (state,action)=>{       
          state.isLoading=false;
         })
         builder.addCase(updateBanner.rejected,(state,action)=>{
          state.isLoading=false;
        })
    }
})

export default bannerSlice.reducer