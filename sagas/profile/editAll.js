import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import { store } from "store/index";

import {getStore} from '../../store/configureStore';

// import { encode } from "../../services/encryption";

function* editAll({ data }) {
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    console.log("SAGA edit all is", data);
    formData.append("birth_date", data.birth_date);
    formData.append("gender", data.gender);
    formData.append("postcode", data.postcode);
    formData.append("phone_number", data.phone_number);

    const { response, error } = yield call(api.editAll, formData, headers);
    console.log(response, error);

    // if response status is success then we will update the reducer
    if(response && response.data.status === 'success') {
        yield put(Actions.editAllSuccess(response.data));
        yield put(Actions.getFull());
    }
    if(error) {
        yield put(Actions.editAllFail(error.response));
    }
}

function* watchEditAll() {
  yield takeLatest(Actions.EDIT_ALL, editAll);
}

export default function* submit() {
  yield all([fork(watchEditAll)]);
}