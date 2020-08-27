import Actions from "../../actions";

const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
})

function premiumDowngrade(state, action) {
    if(typeof state === "undefined") {
        return getDefaultState();
    }

    switch(action.type) {
        case Actions.PREMIUM_DOWNGRADE:
            return {
                isLoading: true,
                error: null,
                data: {},
            }
        case Actions.PREMIUM_DOWNGRADE_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            }
        case Actions.PREMIUM_DOWNGRADE_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {},
            }
        default:
            return state;
    }
}

export default premiumDowngrade;