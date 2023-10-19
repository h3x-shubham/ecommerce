
export async function getdata(id: any) {
    try {
        const res = await fetch(`http://localhost:3000/api/getproducts/${id}`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        return "there is an error";
    }
}

export async function setcart(item: any) {
    const res=fetch("/api/addcartitem", {
        method: "POST", // Specify the method

        body: JSON.stringify(item), // Convert the object to JSON string
    });

    
    // console.log(item);
}