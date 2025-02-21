import React, { useState } from 'react';
import axios from 'axios';
const App = () => {

  const [ImageData, setImageData] = useState([])

  async function ClickBtn(){

    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    setImageData(response.data)
    

  }
  return (
    <div className='p-10'>
    
      <button onClick={ClickBtn} className='px-3 py-2 active:scale-95 bg-blue-300 rounded-lg'>GET products </button>


{ImageData.map(function(item,idx){
  return <div key={idx} className='inline-block '>
   
    <img className=' h-60 w-60 border-2 px-1.5 py-3 border-amber-300' src={item.image} alt={item.title} />
    <p>Price: {item.price}</p>
    <p>Category: {item.category}</p>
    <p>Id: {item.id}</p>
      {/* <h2>{item.title}</h2> 
     <p>{item.description}</p>  */}
  </div>
})}

    </div>
  );
}

export default App;
