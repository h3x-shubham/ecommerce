'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { cn } from '@/lib/utils';
import { redirect, useRouter } from "next/navigation";
import Link from 'next/link';
function Itemcard(data: any) {
  const item=data.data
  const id=item.id

  return (
    <Link href={`http://localhost:3000/product/${id}`} className='h-full'>
      <Card
        className={cn("w-[250px]")}
      >
        <CardHeader>
          {/* <div className="h-[200px]">
          <img src={item.image} alt="img" />
          </div>
        <br /> */}
          <CardTitle className="truncate">{item.title}</CardTitle>
          <CardDescription>{item.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={item.image} width={"w-full"} alt="img" />
        </CardContent>
        <CardContent>
          <p>₹ {item.price}</p>
        </CardContent>
        <CardFooter>
          <p>
            ★{item.rating.rate}({item.rating.count})
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default Itemcard