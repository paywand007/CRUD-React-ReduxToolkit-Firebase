import React,{useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchItems,deleteItem } from '../app/itemSlice'
import { HiPencil } from 'react-icons/hi';
import {AiOutlineCloseCircle} from 'react-icons/ai'
function ViewItems({handleToEdit,itemToEdit}) {
    const data=useSelector((state)=>state.item.itemsArr)
console.log(data)
    //fetch items
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchItems())
    },[dispatch])
           //delete items 
           const handleDelete=(id)=>{
dispatch(deleteItem(id));
           }
  return (
    <div className='w-full h-fit '>
    {!data ? (
      <p>Loading...</p>
    ) : (
      <table className="min-w-full bg-white border border-gray-300">
      {/* Apply Tailwind CSS classes for table */}
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Age</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Edit or Dlete</th>
            {/* Add more table headers */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{index+1}</td>
              <td className="py-2 px-4 border-b">{item.item.id}</td>
              <td className="py-2 px-4 border-b">{item.item.name}</td>
              <td className="py-2 px-4 border-b">{item.item.age}</td>

              <td className="py-2 px-4 border-b flex justify-center gap-2"> <span onClick={()=>handleToEdit(item)}><HiPencil size={25}/>
              
              </span>{!itemToEdit?( <span onClick={()=>handleDelete(item.id)}> <AiOutlineCloseCircle   size={25} color='red'/></span>):(<span onClick={()=>handleDelete(item.id)}> <AiOutlineCloseCircle   size={25} color='red'/></span>)}</td>

              {/* Render more table cells based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
   
  )
} 

export default ViewItems