export const NAME = "QUERY";

export const CANCEL_PRODUCT = `${NAME}/CANCEL_PRODUCT`;
export const CANCEL_PRODUCT_SUCCESS = `${NAME}/CANCEL_PRODUCT_SUCCESS`;
export const CANCEL_PRODUCT_FAIL = `${NAME}/CANCEL_PRODUCT_FAIL`;
export const RESET_CANCEL_PRODUCT = `${NAME}/RESET_CANCEL_PRODUCT`;

export const getCancelProductData = store => store[NAME].cancelProduct;

export const cancelProduct = data => ({
    type: CANCEL_PRODUCT,
    data
});

export const cancelProductSuccess = data => ({
    type: CANCEL_PRODUCT_SUCCESS,
    data
});

export const cancelProductFail = error => ({
    type: CANCEL_PRODUCT_FAIL,
    error
});