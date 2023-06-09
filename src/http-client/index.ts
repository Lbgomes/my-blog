import axios from "axios";


const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  
export default httpClient
