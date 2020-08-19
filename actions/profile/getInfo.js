export const NAME = "PROFILE"; // folder name

// type name
export const GET_INFO = `${NAME}/GET_INFO`;
export const GET_INFO_SUCCESS = `${NAME}/GET_INFO_SUCCESS`;
export const GET_INFO_FAIL = `${NAME}/GET_INFO_FAIL`;

export const getGetInfoData = (store) =>store[NAME].getInfo;

// create action function
export const getInfo = (data) => ({
    type: GET_INFO,
    data: data,
})

export const getInfoSuccess = (data) => ({
    type: GET_INFO_SUCCESS,
    data,
})

export const getInfoFail = (error) => ({
    type: GET_INFO_FAIL,
    error
});