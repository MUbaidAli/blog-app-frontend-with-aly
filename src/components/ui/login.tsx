"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginTypes } from "@/types/authTypes"
import { useState } from "react"
import axios from "@/config/axios"
import userService from "@/services/user"
import getApiErrorMessage from "@/utils/apiError"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"




export default function Login() {
  const [formData ,setFormData] = useState<LoginTypes>({email:"",password:""})
  const [formError , setFormError] = useState<Partial<LoginTypes | null>>(null)
  const [user,setUser] = useState()
  const [loading ,setLoading] = useState<boolean>(false)
  const [error , setError] = useState<string | null>("")
  const {refreshUser} =  useAuth()

  const router = useRouter();


function handleChange(e : React.ChangeEvent<HTMLInputElement>){
  // e.preventDefault()

    setFormData((prev)=>({...prev , [e.target.name]:e.target.value}))

}


  async function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setFormError(null)
    setError(null)

    if(formData.email === ""){
     setFormError((prev)=> ({...prev ,email:"Please Enter Email"}))
    }if(formData.password === "" || formData.password.length < 6){
      setFormError((prev)=> ({...prev , password:"Password Length must Be Atleast 6 Characters" }))
    }

    console.log("running")
    if(formError) return ;


    try {
        setLoading(true);

        const res = await userService.login(formData)

        console.log(res)
        

      await refreshUser()
      router.push("/")


    } catch (err) {
      setError(getApiErrorMessage(err.message))
      console.log(err)
    }finally{
      setLoading(false)

    } 





  }



    
//    const [loginData,setLoginData] =  useState<LoginTypes>({email:"",password:""})
    


// function handleLogin(e:React.ChangeEvent<HTMLInputElement>){

// setLoginData((prev => ({...prev , [e.target.name]:e.target.value})))




// }

    // async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    //     e.preventDefault()
    //     try {

    //       const res =   await axios.post("/login" , loginData )

    //       console.log(res);
            
    //     } catch (error:unknown) {
    //         console.log("Error: " , error.message)
    //     }



    // }
    return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link"><Link href={"/register"}> Sign Up</Link></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h3 className="text-red-700">{error && error}</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
          
                name="email"
                value={formData.email}
                onChange={handleChange}
          
              />
              <p className="text-red-700">
              {formError?.email && formError.email}
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
              
              />
              <p className="text-red-700">
              {formError?.password && formError.password}
              </p>
            </div>
          </div>
      <CardFooter className="flex-col gap-2 mt-5 px-0">
        <Button type="submit"  className="w-full" >
          Login
        </Button>
        {/* <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
      </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
