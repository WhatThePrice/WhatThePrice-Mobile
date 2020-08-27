import fetchApi from "./helper";

const authURL = "https://laravel-sandbox-whattheprice.herokuapp.com/";

// login
export const login = data => {
    return fetchApi("post", authURL, "api/login", data);
};
  
// register
export const register = data => {
    return fetchApi("post", authURL, "api/register", data);
};

// get info
export const getInfo = headers => {
    return fetchApi("get", authURL, "api/user", null, headers);
};

// get full
export const getFull = headers => {
    return fetchApi("get", authURL, "api/profile", null, headers);
};

// upgrade premium
export const premiumUpgrade = (data, headers) => {
    return fetchApi("get", authURL, "api/user/upgrade", data, headers);
};

// downgrade premium
export const premiumDowngrade = (data, headers) => {
    return fetchApi("get", authURL, "api/user/downgrade", data, headers);
};

// edit info
export const editAll = (data, headers) => {
    return fetchApi("post", authURL, "api/profile/update", data, headers);
};

// FOR QUERY !

const queryAPI = "https://api-sandbox-286406.et.r.appspot.com/api/scraper/query";

// get query dummy data
export const result = (data) => {
    return fetchApi("get", queryAPI, `?q=${data.query}&user_id=${data.userID}`);
}