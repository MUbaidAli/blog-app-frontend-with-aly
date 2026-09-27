"use client"
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ProtectRoute({children} :{children:React.ReactNode}) {
  const {user,loading} = useAuth()
  
const router = useRouter()

    useEffect( ()=>{

        if(!user && !loading){
            
            router.replace("/login")
            
        }
            }
        
        ,[user,loading,router])


            if(loading) {
                return <>Loading......</>
            }


                if(!user) return null


    return (
    <div>

        {children}
    </div>
  )
}
