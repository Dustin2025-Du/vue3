import Api from '@/api/request';

const getRequest=(path: string,params: any)=>{
    return Api.get(path, { params})
}
const postRequest=(path: string)=>{
    return Api.post(path)
}

export const getAllApi=(path: string,params: any)=>{
    return getRequest("",params);
}