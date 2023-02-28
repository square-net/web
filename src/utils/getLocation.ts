import axios from "axios";

export const getUserLocationFromAPI = () => {
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_API_KEY}`;
    const response = axios.get(url);
    
    return response;
}
 
 