import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authoptions } from "@/lib/options";
export async function POST(req: NextRequest) {
   
const session=await getServerSession(authoptions)
if(!session){
    return new Response(JSON.stringify({msg:"UNAUTHORIZED ACCESS!"}))
    
}
const item=await req.json()
    console.log(JSON.stringify( item.rating))
    // const res = await prisma.cartItem.create({
    //     data: {
    //         content: tweet.tweet,
    //         userId: session?.user.id
    //     }, include: {
    //         user: true
    //     }
    // })

return new Response(JSON.stringify({hell:"wrld"}))
    // try {

    //     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    //     // console.log("baby")
    //     const products = await res.json()
    //     if (products) {
    //         // revalidatePath(request.url)
    //         return new Response(JSON.stringify(products), { status: 200 })
    //     } else {
    //         return new Response(JSON.stringify({ msg: "no data" }), { status: 500 })

    //     }

    // } catch (error) {
    //     console.log("baby error")
    //     return new Response(JSON.stringify(error), { status: 500 })
    // }

}