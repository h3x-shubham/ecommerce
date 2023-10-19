import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authoptions } from "@/lib/options";

async function exists<Model extends{count:any}>(model:Model,args:Parameters<Model['count']>[0]){
    const count=await model.count(args)
    return Boolean(count)
} 


export async function POST(req: NextRequest) {
   try {
       const session = await getServerSession(authoptions)
       if (!session) {
           return new Response(JSON.stringify({ msg: "UNAUTHORIZED ACCESS!" }))

       }
       const user = session?.user
       const item = await req.json()

    //    console.log(item)



       const cartExists = await exists(prisma.cart, {
           where: {
               userId: user.id
           }
       })

       if (!cartExists) {


           const cart = await prisma.cart.create({
               data: {
                   userId: user?.id
               },
               include: {
                   user: true
               }
           })
        //    console.log(cart)
       }
       else {
           const cart = await prisma.cart.findFirst({
               where: {
                   userId: user.id
               }
           })


           const cartitem = await prisma.cartItem.create({
               data: {
                   fakeid: item.id,
                   title: item.title,
                   price: item.price,
                   description: item.description,
                   category: item.category,
                   image: item.image,
                   rating: item.rating,
                   cartId: cart.id
                   // quantity:item.quantity
               }, include: {
                   cart: true
               }
           })
       }

       // console.log(JSON.stringify( item))
    //    console.log(cartExists)
       // console.log(user.id)
       // const res = await prisma.cartItem.create({
       //     data: {
       //         content: tweet.tweet,
       //         userId: session?.user.id
       //     }, include: {
       //         user: true
       //     }
       // })

       return new Response(JSON.stringify({ hell: "wrld" }))
   } catch (error) {
       return new Response(JSON.stringify(error))
   }

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