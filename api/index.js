import fetchApi from "./helper";

// login
export const login = data => {
    return fetchApi("post", "api/login", data);
};
  
// register
export const register = data => {
    return fetchApi("post", "api/register", data);
};

// get info
export const getInfo = headers => {
    return fetchApi("get", "api/user", null, headers);
};

// changetype
export const premiumUpgrade = (data, headers) => {
    return fetchApi("post", "api/usertype", data, headers);
};