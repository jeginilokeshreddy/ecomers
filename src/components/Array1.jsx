import React,{useState} from 'react';

const Array1 = () => {
  const [arraydata,setArrraydata]=useState([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 },
    { id: 4, name: 'Item 4', value: 40 },
    { id: 5, name: 'Item 5', value: 50 },
    { id: 6, name: 'Item 6', value: 60 },
    { id: 7, name: 'Item 7', value: 70 },
    { id: 8, name: 'Item 8', value: 80 },
    { id: 9, name: 'Item 9', value: 90 },
    { id: 10, name: 'Item 10', value: 100 }
  ])
  const [newarraycreate,setnewarraycreate]=useState([])
  const removevalue=(indexno)=>{
             
              setArrraydata(arraydata.filter((item,index)=>{
                return indexno !==index
       }))      

    //for every call back backfunction we will give one retun keyword
    //arraydata.filter
    //
  //     setnewarraycreate((prev)=>{
  //       return [...prev,arraydata.filter((item,index)=>{
  //         return indexno == index
  // })]
  //      }) 
  setnewarraycreate((prev)=>{
    debugger
    return [...prev,...arraydata.filter((item,index)=>{
      return indexno == index
})]
   }) 
  }

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {arraydata.map((item,indexno )=> {
            return(
              <>
              <li key={item.id}>
              {item.name} - Value: {item.value}
            </li>
           <button onClick={()=>{
            removevalue(indexno)
           }}>remove</button>
           {/* <button>getbackvalue</button> */}
            </>
            )
        }
         
        )}
      </ul>
      <h2>new array</h2>
      {(newarraycreate.length !==0) ?newarraycreate.map((item)=>{
  return <p style={{marginLeft:"20px"}}> {item.name} - {item.value}</p>
  
   }):<h1>nodata</h1>}
   
   <button onClick={(e)=>{
    
   }}>Addback</button>
    </div>
  );
};

export default Array1;



