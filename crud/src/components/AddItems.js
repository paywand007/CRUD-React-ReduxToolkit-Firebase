import React ,{useEffect, useState}from 'react'
import { useDispatch } from 'react-redux';
import { addItemToFireStore,updateItems } from '../app/itemSlice';
 
function AddItems({itemToEdit,cancelUpdate}) {
  
 
   // add item states
   const [id, setId] = useState('');
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
 // update item states
 const [editId, setEditId] = useState('');
 const [editName, setEditName] = useState('');
 const [editAge, setEditAge] = useState('');
//now we use useEffecte to update status valeu 
useEffect(()=>{
  if(itemToEdit!==null){setEditId(itemToEdit.item.id);
setEditName(itemToEdit.item.name);
setEditAge(itemToEdit.item.age);}


},[itemToEdit])

   const dispatch = useDispatch();

   // add book event
   const handleAddItem = (e) =>{
       e.preventDefault();
       let item={
        id,name,age
       }
    
       // dispatch function
       dispatch(addItemToFireStore(item));

       // clearing form
       setId('');
       setName('');
       setAge('');  
   }
      //update item event 
      const handleUpdate=(e)=>{
        e.preventDefault()
        let item ={

          id:editId,name:editName,age:editAge
        }
        dispatch(updateItems({id: itemToEdit.id, item}));

        setEditId('');
        setEditName('');
        setEditAge('');
       
      }
  return ( <div className='  flex justify-center bg-[#36b2db] w-full h-fit items-center    '>

{itemToEdit=== null?(   
    <form className='flex flex-col max-w-[600px] w-full m-5' onSubmit={handleAddItem}>
 
    <h2 className="text-2xl text-left font-bold m-5 ">
Add Users    </h2>
    <label className='font-semibold'>Name</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Name' name='id' required
    onChange={(e)=>setId(e.target.value)} value={id} />
  
    <br />

    <label className='font-semibold'>Age</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Age'  name='name' required
    onChange={(e)=>setName(e.target.value)} value={name} />
  
    <br />

    <label className='font-semibold'>Email</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Email'  name='age' required
    onChange={(e)=>setAge(e.target.value)} value={age} />
    
    <br />

    <button type='submit' className='font-semibold bg-[#2c203f] text-[#fff] p-2 hover:bg-neutral-900' >Add</button>

</form>
):(
  <form className='flex flex-col max-w-[600px] w-full h-fit m-5' onSubmit={handleUpdate}>
 
    <h2 className="text-2xl text-left font-bold m-5 ">
Add Users :    </h2>
    <label className='font-semibold'>Name</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Name'required
    onChange={(e)=>setEditId(e.target.value)} value={editId} />
    <br />

    <label className='font-semibold'>Age</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Age' required
    onChange={(e)=>setEditName(e.target.value)} value={editName} />
    <br />

    <label className='font-semibold'>Email</label>
    <input className='bg-[#FEFBE9] p-1' type="text" placeholder='Email' required
    onChange={(e)=>setEditAge(e.target.value)} value={editAge} />
    <br />

 <div className=' w-full'>   <button type='submit' className='font-semibold bg-[#2c203f] text-[#fff] p-2 hover:bg-[#0c1077]' >Update</button>
 {editId ?( editId  && <button type='submit' onClick={()=>cancelUpdate()} className='font-semibold bg-[#eb1b4f] text-[#fff] p-2 hover:bg-neutral-500' >cancel</button>)
 :( !editId&& <button type='submit' onClick={()=>cancelUpdate()} className='font-semibold bg-[#eb1b4f] text-[#fff] p-2 hover:bg-neutral-500' >cancel</button>)} 
</div>
</form>
 )}
</div> )
}

export default AddItems