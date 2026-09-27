"use client"
import userService, { User } from '@/services/user'
import React, { createContext, useContext, useEffect, useState } from 'react'


interface AuthContextTypes {
    user: User | null,
    loading: boolean,
    refreshUser: () => Promise<void>,
    logout: () => Promise<void>

}



const AuthContext = createContext<AuthContextTypes | null>(null)


export default function AuthProvider({children} : {children:React.ReactNode}) {
    const [user,setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState<boolean>(true)


const refreshUser  =  async () => {

    try {
            setLoading(true)
        const data =  await userService.getMe()

        setUser(data)

    } catch (error) {
        console.error("Failed to fetch user:", error);
      setUser(null);
        
    }finally{
        setLoading(false)
    }



}

const logout = async () =>{

        try {
                await userService.logout() 

                setUser(null)

        } catch (error) {

            console.log(error)
        }
}



useEffect(()=>{
        const user = async () => {

            await refreshUser()

        }

        user();
},[])



    return (<>
    <AuthContext.Provider value={{user,loading,logout ,refreshUser,}}>
    {children}
    </AuthContext.Provider>
        </>
  )
}




// import React from 'react'

export function useAuth() {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return context;

}
