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
  setnewarraycreate((prev)=>{
    debugger
    return [...prev,...arraydata.filter((item,index)=>{
      return indexno == index
})]
   }) 
  }
  const Addback=(index,id)=>{
  
    let newitem=newarraycreate[index]
    const indexToInsert = arraydata.findIndex(item => item.id > newitem.id);
    if (indexToInsert !== -1){
       let backuparrya=[...arraydata]
       let details=backuparrya.splice(indexToInsert,0,newitem)
      setArrraydata(backuparrya)
    }
    
    setnewarraycreate(newarraycreate.filter((item,indexid)=>{
      return indexid!==index
    }))

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
      {(newarraycreate.length !==0) ?newarraycreate.map((item,index)=>{
  return <><p style={{marginLeft:"20px"}}> {item.name} - {item.value}</p>
  
  <button  onClick={()=>{
      Addback(index)
   }}>Addback</button></>
  
   }):<h1>nodata</h1>}
   
  
    </div>
  );
};

export default Array1;



