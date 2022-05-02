import http  from '../http-common';
import { properties} from '../utilities/constants.js';

const getAll = (params) => {
    return http.get("/cities",{ params,  
            auth: {
                username: properties.username,
                password: properties.password
              }
     
    });
}


const updateCity = (params) => {
    return http.put("/cities/city",params, {auth: {
        username: properties.username,
        password: properties.password
      }});
}


const getCityByName = (params) => {
    return http.get("/cities/city", {params, 
        auth :{ 
            username: properties.username,
            password: properties.password
        }});
}


export default { getAll, updateCity, getCityByName };