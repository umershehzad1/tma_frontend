import axios from 'axios';

import { Config } from '../../config';
import { AuthHeader } from './auth.utils';
const baseURL = Config.API_BASE_URL;



export const GetApiData = async (endpoint, method, payload, secured) => {
    let headers = AuthHeader();
    let apiOptions = { url: baseURL + endpoint }
    if (method !== '') apiOptions.method = method
    if (payload != null) apiOptions.data = payload
    if (secured !== false) apiOptions.headers = headers
    return await axios(apiOptions);
}

export const GetPaymentData = async (endpoint, method, payload, secured) => {

    let headers = AuthHeader();
    let apiOptions = { url: baseURL + endpoint }
    if (method !== '') apiOptions.method = method
    if (payload != null) apiOptions.data = payload
    if (secured !== false) apiOptions.headers = headers

    return await axios(apiOptions);
}

export const PostFormData = async (endpoint, method, payload, secured, headers, responseType) => {

    let authHeaders = AuthHeader();
    let allHeaders = {...authHeaders, ...headers};
    let apiOptions = { url: baseURL + endpoint }
    if (method !== '') apiOptions.method = method
    if (payload != null) apiOptions.data = payload
    if (method !== '') apiOptions.method = method
    if (responseType !== '') apiOptions.responseType = responseType
    if (secured !== false) apiOptions.headers = allHeaders;
   
    return await axios(apiOptions);
}

export const GetPublicData = async (endpoint, method, payload) => {

}