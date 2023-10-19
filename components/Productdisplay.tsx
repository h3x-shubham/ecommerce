
import React from 'react'
import Itemcard from './Itemcard'

function Productdisplay(data:any) {
  const prods=data
  return (
    <div className='flex flex-row flex-wrap gap-3  border border-red-950 justify-center '>
      {/* {JSON.stringify(data)} */}
      {
        prods?.data?.map((item)=>
          // <p>{item.image}</p>
          <Itemcard data={item}/>
        )
      }
    </div>
  )
}

export default Productdisplay