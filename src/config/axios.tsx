import axios,{AxiosInstance} from "axios";


const api : AxiosInstance = axios.create({
  baseURL: typeof window === "undefined" ? process.env.API_URL : process.env.NEXT_PUBLIC_API_URL,
  timeout:10000,
  withCredentials: true,
  headers:{
    "Content-Type":"application/json"
  }
})



export default api




// import axios from "axios";
// const instance = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
//   timeout: 1000,
//   withCredentials:true,
//   headers: { 'X-Custom-Header': 'foobar' },
// });




// export default instance