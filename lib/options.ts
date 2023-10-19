import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prisma from "./prisma"
export const authoptions:NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    adapter:PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.userId=user.id
                return {...token,userId:user.id}
            }
            return token
        },
        async session({session,token}){
            return {...session,user:{
                ...session.user,id:token.userId
            }}

        },
        redirect(){
            return '/home'
        }
    }
}

