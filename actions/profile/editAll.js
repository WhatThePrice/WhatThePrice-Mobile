export const NAME = "PROFILE"; // folder name


// type name
export const EDIT_ALL = `${NAME}/EDIT_ALL`;
export const EDIT_ALL_SUCCESS = `${NAME}/EDIT_ALL_SUCCESS`;
export const EDIT_ALL_FAIL = `${NAME}/EDIT_ALL_FAIL`;

export const getEditAllData = (store) =>store[NAME].editAll;

// edit action function
export const editAll = (data) => ({
    type: EDIT_ALL,
    data: data,
})

export const editAllSuccess = (data) => ({
    type: EDIT_ALL_SUCCESS,
    data,
})

export const editAllFail = (error) => ({
    type: EDIT_ALL_FAIL,
    error
  });