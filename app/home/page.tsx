import React from 'react'
import Productdisplay from '@/components/Productdisplay';
async function getdata() {
  try {
    const res = await fetch("http://localhost:3000/api/getproducts");
    const data = await res.json();
    
    return data;
  } catch (error) {
    console.log(error);
    return "there is an error";
  }
}
async function page() {
      const list = await getdata();

  return <div className=''>
        
        <Productdisplay data={list}/>
    
    </div>;
}

export default page