import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import {addDoc ,getDocs,deleteDoc,doc, collection,updateDoc} from 'firebase/firestore'

import  db from '../firebase'
//Add items
export const addItemToFireStore = createAsyncThunk(

'add/addToDb',
async(item )=>{
    try {
const addItemRef= await addDoc(collection(db,'todo'),item)
const newItem= { id: addItemRef.id, item };
return newItem;
}catch (err){
console.log(err)
}}
)
//Fetch Itmes
export const fetchItems=createAsyncThunk(
  'add  /fetch',
  async()=>{
    const querySnapShot= await getDocs(collection(db,'todo'));
    const items=querySnapShot.docs.map(doc=>({
      id:doc.id,
      item:doc.data(),
    }))
    return items;
  }
)
//Delete Items 
export const deleteItem=createAsyncThunk('Items/Delete',
async(id)=>{
  const itmes= await getDocs(collection(db,'todo'));

  for(const i of itmes.docs) {
    if(i.id=== id){
      await deleteDoc(doc(db,'todo',i.id))
    }
  }
  return id;
}
)

//Update Items
export const updateItems = createAsyncThunk(
  'Items/update',
async(editItems)=>{
    const itmes = await getDocs(collection(db,'todo'));
    for(const snap of itmes.docs){
      if(snap.id === editItems.id){
        const itemRef = doc(db,'todo', snap.id);
        await updateDoc(itemRef, editItems.item);
      }
    }
    return editItems;
}
)

 const itemSlice=createSlice({
    name:'items',
    initialState: {
        itemsArr:[]
    },
    // reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(addItemToFireStore.fulfilled, (state, action)=>{
            state.itemsArr.push(action.payload);
          })
          .addCase(fetchItems.fulfilled, (state,action)=>{
            state.itemsArr = action.payload;
          }).addCase(deleteItem.fulfilled, (state,action)=>{
state.itemsArr = state.itemsArr.filter(item=> item.id !== action.payload);

          })
          .addCase(updateItems.fulfilled,(state,action)=>{
            const {id ,item}=action.payload;
            const itemInex=state.itemsArr.findIndex((item)=>item.id === id)
            if (itemInex !== -1){
              state.itemsArr[itemInex] = {id:id,item}
            }
          });
      } 
})
export default itemSlice.reducer;