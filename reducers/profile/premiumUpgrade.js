import Actions from "../../actions";

const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
})

function premiumUpgrade(state, action) {
    if(typeof state === "undefined") {
        return getDefaultState();
    }

    switch(action.type) {
        case Actions.PREMIUM_UPGRADE:
            return {
                isLoading: true,
                error: null,
                data: {},
            }
        case Actions.PREMIUM_UPGRADE_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            }
        case Actions.PREMIUM_UPGRADE_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {},
            }
        default:
            return state;
    }
}

export default premiumUpgrade;