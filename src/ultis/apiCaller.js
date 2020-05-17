import axios from 'axios';
import * as Config from './../constants/Config';



export default function(endpoint, method, body){
    return axios({
        method : method,
        url : `/${endpoint}`,
        data : body,
        
    }).catch(err =>{
        console.log(err);
    })
 } ;