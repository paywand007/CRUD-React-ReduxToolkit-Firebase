import React,{useState} from 'react';
 
import   AddItems  from './components/AddItems';
import './index.css';
import ViewItems from './components/ViewItems';

function App() {
  //we ue this state to hold what we want to edit 
const [itemToEdit,setItemToEdit]=useState(null);
console.log('item',itemToEdit)
const handleToEdit=(item)=>{
setItemToEdit(item);
 
}
const cancelUpdate=()=>{
  setItemToEdit(null);
}

  return (
    <div  >
      <h1 className="text-2xl m-5 text-center font-bold  ">
     
    CRUD app using React, Redux ToolKit and Firebase Cloud Firestore
  </h1><div className=" md:flex justify-center md:items-center gap-5">
    
        <AddItems
        itemToEdit={itemToEdit}
        cancelUpdate={cancelUpdate}
        />
        <ViewItems 
        handleToEdit={handleToEdit}
        itemToEdit={itemToEdit}
        
        />
    </div></div>
    
  );
}

export default App;
