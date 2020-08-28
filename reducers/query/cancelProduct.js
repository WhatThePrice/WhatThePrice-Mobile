import Actions from "../../actions";

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function cancelProduct(state, action) {
    if (typeof state === "undefined") {
        return getDefaultState();
    }

    switch (action.type) {
        case Actions.CANCEL_PRODUCT:
            return {
                isLoading: true,
                error: null,
                data: {}
            };
        case Actions.CANCEL_PRODUCT_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data
            };
        case Actions.CANCEL_PRODUCT_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {}
            };
        case Actions.RESET_CANCEL_PRODUCT:
            return getDefaultState();
        default:
            return state;
    }
}

export default cancelProduct;