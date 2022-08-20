import axios from "axios";

//base URL
const instance = axios.create({
    //baseURL
    baseURL: "http://localhost:8080/app/api/v1/"
    //Header
    //Timeout

})
export default instance