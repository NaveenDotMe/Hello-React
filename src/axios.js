import axios from "axios";

//base URL
const instance = axios.create({
    //baseURL
    baseURL: "https://jsonplaceholder.typicode.com/"
    //Header
    //Timeout

})
export default instance