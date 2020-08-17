import fetchApi from "./helper";

// login
export const login = data => {
    return fetchApi("post", "api/login", data);
};
  
// register
export const register = data => {
    return fetchApi("post", "api/register", data);
};

// get user
export const getUser = headers => {
    return fetchApi("get", "api/user", headers);
};