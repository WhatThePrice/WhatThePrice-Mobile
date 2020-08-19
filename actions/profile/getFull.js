export const NAME = "PROFILE"; // folder name

// type name
export const GET_FULL = `${NAME}/GET_FULL`;
export const GET_FULL_SUCCESS = `${NAME}/GET_FULL_SUCCESS`;
export const GET_FULL_FAIL = `${NAME}/GET_FULL_FAIL`;

export const getGetFullData = (store) =>store[NAME].getFull;

// create action function
export const getFull = (data) => ({
    type: GET_FULL,
    data: data,
})

export const getFullSuccess = (data) => ({
    type: GET_FULL_SUCCESS,
    data,
})

export const getFullFail = (error) => ({
    type: GET_FULL_FAIL,
    error
});