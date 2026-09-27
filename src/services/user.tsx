import axios from "@/config/axios";
import { ApiResponse } from "@/types/apiResponse";


export interface User {
    id:string,
    username:string,
    email:string,
    
}

interface CreateUserInput {
    username:string,
    email:string,
    password:string
}


interface ResponsesMessage {
    message:string,
    success:boolean,
    data?: User
}

type LoginUser = Omit<CreateUserInput ,"username">;
type updateUser = Partial<CreateUserInput>;


const userService = {

        getAll : async () : Promise<User[]> =>{

           const {data} = await axios.get("/user");
           return data 
        },
        
        getMe : async () : Promise<User> =>{
            const {data} = await axios.get("/me" ,{withCredentials:true})
            return data;

        },

        register : async (input : CreateUserInput) : Promise<User> => {
            const {data} = await axios.post("/user" , input);
            return data;
        },

        login: async (input: LoginUser) : Promise<ApiResponse<User>> =>{
            const {data} = await axios.post<ApiResponse<User>>("/login" , input);
            return data;
        },

        delete: async (id:string) : Promise<ResponsesMessage> => {
            const {data} = await axios.delete(`/user/${id}`)
            return data;

        },

        update: async (id:string,input:updateUser) : Promise<User> =>{
                const {data} = await axios.patch(`/user/${id}`,input);
                return data

        },
        logout: async () : Promise<void> => {

            const {data} =     await axios.get("/logout")
            
            return data;

        }



}


export default userService;
