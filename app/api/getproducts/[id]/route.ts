import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }) {
    const id = params.id

    try {

        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        // console.log("baby")
        const products = await res.json()
        if (products) {
            // revalidatePath(request.url)
            return new Response(JSON.stringify(products), { status: 200 })
        } else {
            return new Response(JSON.stringify({ msg: "no data" }), { status: 500 })

        }

    } catch (error) {
        console.log("baby error")
        return new Response(JSON.stringify(error), { status: 500 })
    }

}