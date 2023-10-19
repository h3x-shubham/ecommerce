'use client'
import React from 'react'
import { Button } from './ui/Button';
import Quantity from './Quantity';
import { HeartIcon } from '@radix-ui/react-icons';
import { setcart } from '@/app/product/[id]/gdata';

function Productfour({item}:any) {
    function handleclick(e:any){
        if(e.target.value ==='addtocart'){
            console.log("addtocart")
            setcart(item)
            
    
        }else{
            console.log("Asdadasd")
        }
    
    }


  return (
    <div className="flex gap-4">
      <Quantity
      // calback={setVal1}
      />

      <Button
        variant="secondary"
        value={"buynow"}
        onClick={
          // buynow
          handleclick
        }
      >
        Buy Now
      </Button>
      <Button variant="secondary" value={"addtocart"} onClick={handleclick}>
        Add to Cart
      </Button>

      <Button variant="ghost" value={"wish"} onClick={handleclick}>
        <HeartIcon className="h-4 w-4 mr-2" /> Wish
      </Button>
    </div>
  );
}

export default Productfour