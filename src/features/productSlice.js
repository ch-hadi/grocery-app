import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCall } from "../util/apicall";

export const GetProducts = createAsyncThunk('product/products', async(ThunkApi)=>{
    let url = "https://dummyjson.com/products"
    let data = await ApiCall(url)
    return data?.products
})

export const AddProduct = createAsyncThunk('addProduct/products',async(data,ThunkApi)=>{
  try {
    console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const updateData = createAsyncThunk('updateData/products',async(data,ThunkApi)=>{
  try {
    // console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const DeleteProduct = createAsyncThunk('deleteProduct/products',async(data,ThunkApi)=>{
  try {
    // console.log('in Thunk ->',data)
    return 
  } catch (error) {
    
  }
})

export const productSlice = createSlice({
    name : 'products',
    initialState:{
    products:'',
    category:[],
    isLoading:false,
    isSuccess:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(GetProducts.fulfilled, (state , action)=>{
          //  state.products = action.payload;
           let category=[]
           state.products=action.payload.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {});   
           state.category=Object.keys(state.products)       
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(GetProducts.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
         builder.addCase(DeleteProduct.pending, (state,action)=>{
          // console.log('in extra pending')
          state.isLoading=true;
         })
         builder.addCase(DeleteProduct.fulfilled, (state,action)=>{
          console.log('in extra full')
          if (state.products.hasOwnProperty('hadi')) {
            delete state.products['hadi']
            // console.log('ha product')
          }
          state.isLoading=false;
         })
         builder.addCase(DeleteProduct.rejected,(state,action)=>{
          state.isLoading=false;
         })

         builder.addCase(AddProduct.pending, (state,action)=>{
          // console.log('in extra add pending')
          state.isLoading=true;
         })
         builder.addCase(AddProduct.fulfilled, (state,action)=>{
          console.log('in extra add full')
          state.products['hadi'] = [{name:'ok'}]
          state.isLoading=false;
         })
         builder.addCase(AddProduct.rejected,(state,action)=>{
          state.isLoading=false;
         })

         builder.addCase(updateData.pending, (state,action)=>{
          // console.log('in extra update pending')
          state.isLoading=true;
         })
         builder.addCase(updateData.fulfilled, (state,action)=>{
          // console.log('in extra update full')
          let updatedObj={}
          for (const key in state.products) {
            if (state.products.hasOwnProperty(key)) {
              let newKey = key;
              // Perform any necessary key updates here
              if (key === "smartphones") {
                newKey = "productName";
              } 
              updatedObj[newKey] = state.products[key];
            }
          }  
          state.products=updatedObj        
          state.isLoading=false;
         })
         builder.addCase(updateData.rejected,(state,action)=>{
          state.isLoading=false;
        })
    }
})

export default productSlice.reducer