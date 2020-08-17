import axios from "axios";

export const getHeader = () => {
    return {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    };
};

const getFullUrl = endpoint => {
    // return "http://127.0.0.1:8000/" + endpoint;
    return "https://laravel-sandbox-whattheprice.herokuapp.com/" + endpoint;
};

const fetchApi = (method, endpoint, params, headers) =>
    axios({
        method,
        headers: headers || getHeader(),
        url: getFullUrl(endpoint),
        data: params
    })
        .then(response => ({ response }))
        .catch(error => ({ error }));

export default fetchApi;