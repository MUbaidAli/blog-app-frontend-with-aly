// "use client"

import { PostCard } from "@/components/ui/postCard";
import { getCurrentUser } from "@/lib/auth";
import userService, { User } from "@/services/user";
import { LoginTypes } from "@/types/authTypes";
import Image from "next/image";
// import { useEffect, useState } from "react";


export default async  function Home() {
  // const [user,setUser] = useState<User | null>(null)
  // const [loading ,setloading] = useState<boolean>(false)

  const user  = await getCurrentUser()

  console.log(user)
  // useEffect(()=>{

  //     async function getMe(){
  //         try {
  //             setloading(true)

  //               const res = await userService.getMe()

  //               setUser(res)

  //         } catch (error) {
            
  //           console.log(error)
  //         }finally{
  //       setloading(false)
  //         }

  //     }
  // getMe()

  // },[])


  return (
    <div className="flex py-5 px-5 flex-wrap gap-2 flex-1 items-center max-w-7xl w-full  mx-auto justify-center bg-zinc-50 font-sans dark:bg-black">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      
    </div>
  );
}
