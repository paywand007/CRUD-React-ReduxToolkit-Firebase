import { createSlice  } from "@reduxjs/toolkit";
 const itemSlice=createSlice({
    name:'items',
    initialState: {
        itemsArr:[]
    },
    reducers:{},
    extraReducers:{}, 
})
export default itemSlice.reducers;