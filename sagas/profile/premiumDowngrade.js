import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import { store } from "store/index";

import {getStore} from '../../store/configureStore';

// import { encode } from "../../services/encryption";

function* premiumDowngrade({ data }) {
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    // formData.append("id", data);
    console.log("SAGA data is", data.type);
    // formData.append("type", data.type);

    const { response, error } = yield call(api.premiumDowngrade, formData, headers);
    console.log("premium upgrade saga", response, error);

    // if response status is success then we will update the reducer
    if(response && response.data.status === 'success') {
        yield put(Actions.premiumDowngradeSuccess(response.data));
        yield put(Actions.getFull());
    }
    if(error) {
        yield put(Actions.premiumDowngradeFail(error.response));
    }
}

function* watchPremiumDowngrade() {
  yield takeLatest(Actions.PREMIUM_DOWNGRADE, premiumDowngrade);
}

export default function* submit() {
  yield all([fork(watchPremiumDowngrade)]);
}