import axios from "axios";

const getApiErrorMessage = (err:unknown):string =>{


    if(axios.isAxiosError(err)){
    return err.response?.data?.message ?? err.message ?? "Request failed.";
    }

    if(err instanceof  Error){
        return err.message
    }

    return "Something Went Wrong.Please Try Again"



}


export default getApiErrorMessage;