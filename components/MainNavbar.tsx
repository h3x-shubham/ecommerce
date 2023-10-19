'use client'
import React from 'react'
import { Button } from './ui/Button';
import Link from 'next/link';
import { signIn,useSession,signOut } from 'next-auth/react';
import { BackpackIcon } from '@radix-ui/react-icons';


function MainNavbar() {
    const session=useSession()
    const user:any=session?.data?.user
  return (
    <nav className="h-20 flex justify-center">
      <div
        className="px-5 w-full rounded border flex border-emerald-500 
                        items-center justify-end "
      >
        <div>
          <Link href={"/cart"}>

          <BackpackIcon/>
          </Link>
        </div>
        <div>
        {session ? (
          <Button variant={"ghost"} onClick={signIn}>
            {/* <Link onClick={() => signIn}></Link> */}
           {JSON.stringify(user?.name)} Sign out {/* <button onClick={signIn}>click</button> */}
          </Button>
        ) : (
          <Button
          variant={"ghost"}
          onClick={signOut({ callbackUrl: "http://localhost:3000/home" })}
          >
            {/* <Link onClick={() => signIn}></Link> */}
            Log in {/* <button onClick={signIn}>click</button> */}
          </Button>
        )}
        </div>
        {/* <button className="border border-slate-700 m-1">asd</button> */}
      </div>
    </nav>
  );
}

export default MainNavbar