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

export default helpers;