import {HOST} from "../constants/system";

const helpers = {};

helpers.resolveStatusCode=(request)=>{
    return new Promise((resolve,reject)=>{
        if (request.ok){
            resolve(request.json());
        }else{
            reject(request);
        }
    })
}


const apiClient = {};

/**
 *
 * Getting information from sending v2
 *
 * */
apiClient.post = async (hostname=HOST,path="",method="GET",params={})=>{
    // if a phat was passed, then do stuff
    if (path.length>0){
        // if the start of the path is an /, then be will delete, because in the fetch path is already included
        if (path.slice(0,1) === "/")
            path = path.substr(0);
    }
    //creating the headers
    let headers = new Headers();
    headers.append("Content-Type","application/json");

    const url = `${hostname}${path}`;
    return await fetch( url, {
        method: method,
        headers: headers,
    })
}

apiClient.postWrapper = async (hostname=HOST,path="",method="GET",params={})=>{
    let request = await apiClient.post(hostname,path,method,params);
    return helpers.resolveStatusCode(request);
};

export default apiClient;