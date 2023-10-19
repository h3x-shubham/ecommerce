"use client";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/Button";
import { HeartIcon } from "@radix-ui/react-icons";
import React from "react";

async function getdata(id: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/getproducts/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return "there is an error";
  }
}

async function setcart(item:any){
  fetch("/api/addcartitem", {
    method: "POST", // Specify the method
   
    body: JSON.stringify(item), // Convert the object to JSON string
  });
  console.log(item)

}



async function page({ params }: any) {
  const id = params.id;
  const res = await getdata(id);

 function addtocart() {
   console.log("addtocart");
   setcart(res);
 }
  function wish() {
   console.log("wish");
 }
  function buynow() {
   console.log("buynow");
 }


  return (
    <div className="flex flex-row gap-7 m-3 justify-center mt-10 ">
      <div className="flex rounded-xl border p-4 justify-center items-center">
        <img
          className="rounded-2xl"
          width={250}
          src={res.image}
          alt={res.title}
        />
      </div>
      <div className="flex flex-col w-[400px] items-center-center ">
        <h1 className="text-2xl font-semibold">{res.title}</h1>
        <span>
          <span className="text-yellow-500">★</span>
          <span>{res.rating.rate}</span>
          <span className="text-blue-400">({res.rating.count})</span>
        </span>
        <hr className="border border-slate-400 my-2" />

        <span className="m-5">
          <span>M.R.P. : </span>
          <span className="text-2xl">₹{res.price}</span>
        </span>
        <hr className="border border-slate-400 my-2" />
        <div className="flex flex-col gap-5 my-4">
          <div className="flex gap-4">
            <Quantity />
            <Button variant="secondary" onClick={buynow}>
              Buy Now
            </Button>
            <Button variant="secondary" onClick={addtocart}>
              Add to Cart
            </Button>

            <Button variant="ghost" onClick={wish}>
              <HeartIcon className="h-4 w-4 mr-2" /> Wish
            </Button>
          </div>
        </div>
        <hr className="border border-slate-400 my-2" />
        <div>
          <h1 className="text-xl font-bold my-2">About this item</h1>
          <p>{res.description}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
