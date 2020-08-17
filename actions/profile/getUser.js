export const NAME = "PROFILE"; // folder name


// type name
export const GET_USER = `${NAME}/GET_USER`;
export const GET_USER_SUCCESS = `${NAME}/GET_USER_SUCCESS`;
export const GET_USER_FAIL = `${NAME}/GET_USER_FAIL`;

export const getGetUserData = (store) =>store[NAME].getUser;

// create action function
export const getUser = (data) => ({
    type: GET_USER,
    data: data,
})

export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    data,
})

export const getUserFail = (error) => ({
    type: GET_USER_FAIL,
    error
  });