import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import { store } from "store/index";

import {getStore} from '../../store/configureStore';

// import { encode } from "../../services/encryption";

function* premiumUpgrade({ data }) {
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append("id", data);

    const { response, error } = yield call(api.premiumUpgrade, formData, headers);
    console.log(response, error);

    // if response status is success then we will update the reducer
    if(response && response.data.status === 'success') {
        yield put(Actions.premiumUpgradeSuccess(response.data));
        yield put(Actions.getUser());
    }
    if(error) {
        yield put(Actions.premiumUpgradeFail(error.response));
    }
}

function* watchPremiumUpgrade() {
  yield takeLatest(Actions.PREMIUM_UPGRADE, premiumUpgrade);
}

export default function* submit() {
  yield all([fork(watchPremiumUpgrade)]);
}