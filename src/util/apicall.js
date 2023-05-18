import axios from "axios";
export const ApiCall = async (  url)=>{
    let data = await axios.get(`${url}`)
    return data.data
}