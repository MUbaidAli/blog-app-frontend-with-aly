import userService from "@/services/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const API_URL = process.env.API_URL

export async function getCurrentUser(){

        const cookieStore = await cookies()
        const cookirHeader = cookieStore.getAll().map(({name,value}) => (`${name}=${value}`)).join(",")

        console.log(cookirHeader)
    try {
        
          const data =   await userService.getMe(cookirHeader)
            return data;
        } catch (error) {
        console.log(error)
    }
    // console.log(cookieStore)
            // const cookieHeader = cookieStore.getAll().map(({value}) => (`${name}=${value}`)).join(",")
            // console.log(cookieHeader)
            // return cookieHeader;
}






export async  function requireAdmin(){

    const isAdmin = await getCurrentUser();
console.log(isAdmin)

console.log(isAdmin?.data.username , "isAdmin")
    // if(isAdmin?.data.username === "aly9"){
    //     redirect("/dashboard")
    // }
    if(isAdmin?.data.username !== "aly9"){
        redirect("/login")
    }
    

    return isAdmin;

}